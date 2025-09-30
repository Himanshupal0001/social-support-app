import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { IoSparklesSharp } from 'react-icons/io5';
import { Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Edit3 } from 'lucide-react';
import { X } from 'lucide-react';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { TAIModelTranslation } from '@/localization/types/forms';

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
  const aiModel = t('forms.aiModel', {
    returnObjects: true,
  }) as TAIModelTranslation;

  return (
    <Dialog open={!!open} onOpenChange={(open) => !open && resetAiFields()}>
      <DialogContent className="max-w-4xl w-[95vw] sm:w-[90vw] md:w-[80vw]   ">
        <DialogHeader className="mb-1 sm:mb-2">
          <DialogTitle className="flex items-center gap-2 ">
            <IoSparklesSharp className="text-primary" />
            {aiModel.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-1 sm:space-y-2 flex-1 overflow-hidden flex flex-col min-h-0">
          {aiLoading && (
            <div className="flex items-center justify-center py-2 sm:py-4">
              <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 animate-spin text-primary" />
              <span className="ml-2 text-sm sm:text-base text-muted-foreground">
                {aiModel.generating}
              </span>
            </div>
          )}

          {aiError && (
            <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-2 sm:p-3">
              <p className="text-sm text-destructive">{aiError}</p>
            </div>
          )}

          {!aiLoading && (
            <div className="space-y-1 sm:space-y-2 flex-1 flex flex-col h-full">
              <div className="rounded-lg border p-1 sm:p-3 bg-muted/50 flex-1 flex flex-col min-h-0">
                <div className="flex items-center justify-between mb-1 sm:mb-2 flex-shrink-0">
                  <span className="text-sm font-medium text-muted-foreground truncate">
                    {aiModel.modelHeader}
                  </span>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {!isEditing &&
                      aiSuggesstion &&
                      aiSuggesstion.trim().length > 0 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleEdit}
                          className="h-8 w-8 p-0 flex-shrink-0"
                        >
                          <Edit3 className="h-4 w-4" />
                        </Button>
                      )}
                    {aiSuggesstion && aiSuggesstion.trim().length > 0 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleGenerateResponse}
                        disabled={aiLoading}
                        className="h-8 px-3 text-xs flex-shrink-0"
                      >
                        {aiLoading ? (
                          <Loader2 className="h-3 w-3 animate-spin mr-1" />
                        ) : (
                          <IoSparklesSharp className="h-3 w-3 mr-1" />
                        )}
                        <span className="">
                          {aiSuggesstion && aiSuggesstion.trim().length > 0
                            ? aiModel.regenerate
                            : aiModel.generate}
                        </span>
                      </Button>
                    )}
                  </div>
                </div>
                <textarea
                  value={aiSuggesstion || ''}
                  onChange={(e) => setAiSuggesstion(e.target.value)}
                  disabled={!isEditing}
                  className="w-full flex-1 min-h-[300px] p-1 sm:p-3 border rounded-md bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 text-xs sm:text-sm leading-relaxed overflow-y-auto"
                  placeholder={aiModel.placeholder}
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-2 pt-1 sm:pt-2 border-t border-border/50 flex-shrink-0">
                <Button
                  variant="outline"
                  onClick={handleClickDiscard}
                  className="w-full sm:w-auto order-2 sm:order-1 h-8 sm:h-9 px-2 sm:px-3"
                >
                  <X className="h-4 w-4 mr-2" />
                  <span className="text-sm">{aiModel.discard}</span>
                </Button>
                <Button
                  onClick={handleAccept}
                  className="w-full sm:w-auto order-1 sm:order-2 h-8 sm:h-9 px-2 sm:px-3"
                >
                  <Check className="h-4 w-4 mr-2" />
                  <span className="text-sm">{aiModel.accept}</span>
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
