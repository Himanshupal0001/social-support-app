import type {
  TPersonalInformationFormTranslation,
  TFamilyAndFinancialInfoFormTranslation,
  TSituationDescriptionsFormTranslation,
  TProgressTranslation,
  TReviewStepTranslation,
  TAIModelTranslation,
  TMainFormTranslation,
} from '../types/forms';

export const personalInformation: TPersonalInformationFormTranslation = {
  name: {
    label: 'الاسم',
    placeholder: 'أدخل اسمك الكامل',
    required: 'يرجى إدخال اسمك الكامل',
    minLength: 'يرجى إدخال 3 أحرف على الأقل',
    maxLength: 'الحد الأقصى 100 حرف مسموح',
  },
  nationalId: {
    label: 'الهوية الوطنية',
    required: 'الهوية الوطنية مطلوبة',
    options: {
      passport: 'جواز سفر',
      familyBook: 'دفتر العائلة',
    },
  },
  dateOfBirth: {
    label: 'تاريخ الميلاد',
    required: 'تاريخ الميلاد مطلوب',
    placeholder: 'اختر التاريخ',
  },
  gender: {
    label: 'الجنس',
    required: 'الجنس مطلوب',
    options: {
      male: 'ذكر',
      female: 'أنثى',
      other: 'آخر',
    },
  },
  address: {
    label: 'العنوان',
    required: 'العنوان مطلوب',
    placeholder: 'أدخل عنوانك',
  },
  city: {
    label: 'المدينة',
    required: 'يرجى اختيار المدينة',
  },
  state: {
    label: 'الولاية',
    required: 'يرجى اختيار الولاية',
  },
  country: {
    label: 'البلد',
    required: 'يرجى اختيار البلد',
  },
  phoneNumber: {
    label: 'رقم الهاتف',
    required: 'رقم الهاتف مطلوب',
  },
  email: {
    label: 'البريد الإلكتروني',
    required: 'البريد الإلكتروني مطلوب',
  },
};

export const familyAndFinancialInfo: TFamilyAndFinancialInfoFormTranslation = {
  maritalStatus: {
    label: 'الحالة الاجتماعية',
    required: 'الحالة الاجتماعية مطلوبة',
    options: {
      single: 'أعزب',
      married: 'متزوج',
      widowed: 'أرمل',
      divorced: 'مطلق',
      separated: 'منفصل',
      other: 'آخر',
    },
  },
  dependents: {
    label: 'المعيلون',
    required: 'يرجى إدخال عدد المعيلين',
    placeholder: 'أدخل عدد المعيلين',
    max: 'الحد الأقصى 10 معيلين مسموح',
  },
  employmentStatus: {
    label: 'حالة التوظيف',
    required: 'حالة التوظيف مطلوبة',
    options: {
      employedFullTime: 'موظف - دوام كامل',
      employedPartTime: 'موظف - دوام جزئي',
      selfEmployed: 'يعمل لحسابه الخاص',
      unemployed: 'عاطل عن العمل',
      student: 'طالب',
      retired: 'متقاعد',
      homemaker: 'ربة منزل',
      other: 'آخر',
    },
  },
  monthlyIncome: {
    label: 'الدخل الشهري',
    required: 'الدخل الشهري مطلوب',
    options: {
      none: 'لا يوجد دخل',
      range1: '0 – 1,000',
      range2: '1,001 – 3,000',
      range3: '3,001 – 5,000',
      range4: '5,001 – 10,000',
      range5: '10,001+',
    },
  },
  housingStatus: {
    label: 'حالة السكن',
    required: 'حالة السكن مطلوبة',
    options: {
      ownHome: 'يملك منزلاً',
      renting: 'مستأجر',
      livingWithFamily: 'يعيش مع العائلة',
      governmentHousing: 'سكن حكومي',
      temporaryShelter: 'مأوى مؤقت',
      homeless: 'بدون مأوى',
    },
  },
};

export const situationDescriptions: TSituationDescriptionsFormTranslation = {
  financialSituation: {
    label: 'الوضع المالي الحالي',
    required: 'وصف الوضع المالي مطلوب',
    placeholder: 'صف وضعك المالي الحالي...',
    helpMeWrite: 'ساعدني في الكتابة',
  },
  employmentCircumstances: {
    label: 'ظروف العمل',
    required: 'وصف ظروف العمل مطلوب',
    placeholder: 'صف ظروف عملك...',
    helpMeWrite: 'ساعدني في الكتابة',
  },
  reasonForApplying: {
    label: 'سبب التقديم',
    required: 'سبب التقديم مطلوب',
    placeholder: 'اشرح لماذا تتقدم بطلب للحصول على الدعم الاجتماعي...',
    helpMeWrite: 'ساعدني في الكتابة',
  },
};

export const progress: TProgressTranslation = {
  steps: {
    personalInfo: 'المعلومات الشخصية',
    familyFinancialInfo: 'المعلومات العائلية والمالية',
    describeSituation: 'وصف الوضع',
    reviewSubmit: 'مراجعة وإرسال',
  },
  stepLabel: 'خطوة',
};

export const reviewStep: TReviewStepTranslation = {
  title: 'مراجعة معلوماتك',
  noValue: '—',
};

export const aiModel: TAIModelTranslation = {
  title: 'مساعد الكتابة بالذكاء الاصطناعي',
  generating: 'جاري إنشاء الاقتراح...',
  generate: 'إنشاء',
  regenerate: 'إعادة إنشاء',
  discard: 'تجاهل',
  accept: 'قبول واستخدام',
  placeholder:
    'اكتب نصك هنا أو استخدم زر الإنشاء لإنشاء محتوى بالذكاء الاصطناعي...',
  modelHeader: 'مساعد الكتابة بالذكاء الاصطناعي',
};

export const mainForm: TMainFormTranslation = {
  buttons: {
    previous: 'السابق',
    next: 'التالي',
    submit: 'إرسال',
  },
};
