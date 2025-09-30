/**
 * New currencies data ISO-4217 from https://en.wikipedia.org/wiki/ISO_4217
 * Used in new <CurrencySelect /> component (Nov 2024)
 * adheres to package country-data-list
 */

// Currencies to exclude from the dropdown
export const allCurrencies = [
  'AXG', // Anguilla
  'BAM', // Bosnia and Herzegovina convertible mark
  'BMD', // Bermudian dollar
  'BOV', // Bolivian Mvdol (funds code)
  'CHE', // WIR Euro (complementary currency)
  'CHW', // WIR Franc (complementary currency)
  'CLF', // Chilean Unidad de Fomento (funds code)
  'COU', // Colombian Unidad de Valor Real (funds code)
  'CUC', // Cuban convertible peso
  'KID', // Kiribati dollar
  'KPW', // North Korean won
  'LAK', // Lao kip
  'MGA', // Malagasy ariary
  'MRO', // Mauritanian ouguiya (pre-2018)
  'MXV', // Mexican Unidad de Inversion (funds code)
  'OMR', // Omani rial
  'PRB', // Transnistrian ruble
  'SSP', // South Sudanese pound
  'STD', // São Tomé and Príncipe dobra (pre-2018)
  'SVC', // Salvadoran colón
  'TJS', // Tajikistani somoni
  'TMT', // Turkmenistan manat
  'TVD', // Tuvaluan dollar
  'USN', // United States dollar (next day) (funds code)
  'UYI', // Uruguay Peso en Unidades Indexadas (funds code)
  'VED', // Venezuelan bolívar digital
  'VES', // Venezuelan bolívar soberano
  'VND', // Vietnamese đồng
  'XAF', // Central African CFA franc
  'XAG', // Silver (troy ounce)
  'XAU', // Gold (troy ounce)
  'XBA', // European Composite Unit (EURCO) (bond market unit)
  'XBB', // European Monetary Unit (E.M.U.-6) (bond market unit)
  'XBC', // European Unit of Account 9 (E.U.A.-9) (bond market unit)
  'XBD', // European Unit of Account 17 (E.U.A.-17) (bond market unit)
  'XDR', // Special Drawing Rights
  'XOF', // West African CFA franc
  'XPD', // Palladium (troy ounce)
  'XPF', // CFP franc
  'XPT', // Platinum (troy ounce)
  'XSU', // Sucre (ALBA regional currency)
  'XTS', // Code reserved for testing purposes
  'XUA', // ADB Unit of Account
  'XUG', // Uganda shilling (pre-1987)
  'XXX', // No currency
  'ZWL', // Zimbabwean dollar (no longer in active use)
];

// Currencies to include in the dropdown
export const customCurrencies = [
  // Major Global Currencies
  'USD', // United States Dollar
  'EUR', // Euro
  'GBP', // British Pound Sterling
  'JPY', // Japanese Yen
  'CHF', // Swiss Franc
  'CAD', // Canadian Dollar
  'AUD', // Australian Dollar
  'NZD', // New Zealand Dollar

  // Nordic Countries
  'DKK', // Danish Krone
  'SEK', // Swedish Krona
  'NOK', // Norwegian Krone
  'ISK', // Icelandic Krona

  // European Union (Non-Euro)
  'CZK', // Czech Koruna
  'HUF', // Hungarian Forint
  'PLN', // Polish Zloty
  'RON', // Romanian Leu
  'BGN', // Bulgarian Lev
  'HRK', // Croatian Kuna

  // Asia-Pacific
  'CNY', // Chinese Yuan
  'HKD', // Hong Kong Dollar
  'SGD', // Singapore Dollar
  'KRW', // South Korean Won
  'TWD', // Taiwan Dollar
  'THB', // Thai Baht
  'MYR', // Malaysian Ringgit
  'IDR', // Indonesian Rupiah
  'PHP', // Philippine Peso
  'INR', // Indian Rupee
  'PKR', // Pakistani Rupee
  'BDT', // Bangladeshi Taka
  'LKR', // Sri Lankan Rupee
  'NPR', // Nepalese Rupee

  // Middle East & Africa
  'AED',
  'SAR', // Saudi Riyal
  'QAR', // Qatari Riyal
  'KWD', // Kuwaiti Dinar
  'BHD', // Bahraini Dinar
  'JOD', // Jordanian Dinar
  'ILS', // Israeli Shekel
  'EGP', // Egyptian Pound
  'ZAR', // South African Rand
  'NGN', // Nigerian Naira
  'KES', // Kenyan Shilling
  'GHS', // Ghanaian Cedi
  'MAD', // Moroccan Dirham
  'TND', // Tunisian Dinar
  'DZD', // Algerian Dinar
  'ETB', // Ethiopian Birr

  // Americas
  'MXN', // Mexican Peso
  'BRL', // Brazilian Real
  'ARS', // Argentine Peso
  'CLP', // Chilean Peso
  'COP', // Colombian Peso
  'PEN', // Peruvian Sol
  'UYU', // Uruguayan Peso
  'VEF', // Venezuelan Bolívar
  'BOB', // Bolivian Boliviano
  'PYG', // Paraguayan Guarani
  'GTQ', // Guatemalan Quetzal
  'HNL', // Honduran Lempira
  'NIO', // Nicaraguan Córdoba
  'CRC', // Costa Rican Colón
  'PAB', // Panamanian Balboa
  'DOP', // Dominican Peso
  'JMD', // Jamaican Dollar
  'TTD', // Trinidad and Tobago Dollar
  'BBD', // Barbadian Dollar
  'XCD', // East Caribbean Dollar

  // Eastern Europe & Central Asia
  'RUB', // Russian Ruble
  'UAH', // Ukrainian Hryvnia
  'BYN', // Belarusian Ruble
  'KZT', // Kazakhstani Tenge
  'UZS', // Uzbekistani Som
  'KGS', // Kyrgyzstani Som
  'AMD', // Armenian Dram
  'AZN', // Azerbaijani Manat
  'GEL', // Georgian Lari
  'MDL', // Moldovan Leu
  'RSD', // Serbian Dinar
  'MKD', // Macedonian Denar
  'ALL', // Albanian Lek
  'BAM', // Bosnia and Herzegovina Convertible Mark

  // Other Important Currencies
  'TRY', // Turkish Lira
  'IRR', // Iranian Rial
  'AFN', // Afghan Afghani
  'IQD', // Iraqi Dinar
  'LBP', // Lebanese Pound
  'SYP', // Syrian Pound
  'YER', // Yemeni Rial
  'MVR', // Maldivian Rufiyaa
  'BTN', // Bhutanese Ngultrum
  'MMK', // Myanmar Kyat
  'KHR', // Cambodian Riel
  'MOP', // Macanese Pataca
  'BND', // Brunei Dollar
  'FJD', // Fijian Dollar
  'PGK', // Papua New Guinean Kina
  'SBD', // Solomon Islands Dollar
  'VUV', // Vanuatu Vatu
  'WST', // Samoan Tala
  'TOP', // Tongan Paʻanga
  'XPF', // CFP Franc (French Pacific territories)
];
