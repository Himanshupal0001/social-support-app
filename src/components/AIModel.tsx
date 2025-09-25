import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { IoSparklesSharp } from 'react-icons/io5';
import { Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Edit3 } from 'lucide-react';
import { X } from 'lucide-react';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type TAIModelProps = {
  open: boolean;
  resetAiFields: () => void;
  aiLoading: boolean;
  aiError: string;
  isEditing: boolean;
  aiSuggesstion: string;
  setAiSuggesstion: (value: string) => void;
  handleEdit: () => void;
  handleClickDiscard: () => void;
  handleAccept: () => void;
  handleGenerateResponse: () => void;
};

const AIModel = ({
  open,
  resetAiFields,
  isEditing,
  aiLoading,
  aiError,
  aiSuggesstion,
  setAiSuggesstion,
  handleEdit,
  handleClickDiscard,
  handleAccept,
  handleGenerateResponse,
}: TAIModelProps) => {
  const { t } = useTranslation();
  const aiModel = t('forms.aiModel', { returnObjects: true }) as any;

  return (
    <Dialog open={!!open} onOpenChange={(open) => !open && resetAiFields()}>
      <DialogContent className="max-w-5xl w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] max-h-[90vh] h-[85vh] sm:h-[80vh] md:h-[75vh] lg:h-[70vh]">
        <DialogHeader className="mb-4">
          <DialogTitle className="flex items-center gap-2 ">
            <IoSparklesSharp className="text-primary" />
            {aiModel.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 flex-1 overflow-hidden flex flex-col">
          {aiLoading && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 animate-spin text-primary" />
              <span className="ml-2 text-sm sm:text-base text-muted-foreground">
                {aiModel.generating}
              </span>
            </div>
          )}

          {aiError && (
            <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-4">
              <p className="text-sm text-destructive">{aiError}</p>
            </div>
          )}

          {!aiLoading && (
            <div className="space-y-4 flex-1 flex flex-col">
              <div className="rounded-lg border p-3 sm:p-4 bg-muted/50 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                    AI Writing Assistant
                  </span>
                  <div className="flex items-center gap-2">
                    {!isEditing &&
                      aiSuggesstion &&
                      aiSuggesstion.trim().length > 0 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleEdit}
                          className="h-8 w-8 p-0"
                        >
                          <Edit3 className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      )}
                    {aiSuggesstion && aiSuggesstion.trim().length > 0 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleGenerateResponse}
                        disabled={aiLoading}
                        className="h-8 px-3 text-xs"
                      >
                        {aiLoading ? (
                          <Loader2 className="h-3 w-3 animate-spin mr-1" />
                        ) : (
                          <IoSparklesSharp className="h-3 w-3 mr-1" />
                        )}
                        {aiSuggesstion && aiSuggesstion.trim().length > 0
                          ? aiModel.regenerate
                          : aiModel.generate}
                      </Button>
                    )}
                  </div>
                </div>
                <textarea
                  value={aiSuggesstion || ''}
                  onChange={(e) => setAiSuggesstion(e.target.value)}
                  disabled={!isEditing}
                  className="w-full flex-1 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] p-3 sm:p-4 border rounded-md bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 text-xs sm:text-sm leading-relaxed"
                  placeholder={aiModel.placeholder}
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2">
                <Button
                  variant="outline"
                  onClick={handleClickDiscard}
                  className="w-full sm:w-auto order-2 sm:order-1"
                >
                  <X className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  <span className="text-xs sm:text-sm">{aiModel.discard}</span>
                </Button>
                <Button
                  onClick={handleAccept}
                  className="w-full sm:w-auto order-1 sm:order-2"
                >
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  <span className="text-xs sm:text-sm">{aiModel.accept}</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AIModel;
