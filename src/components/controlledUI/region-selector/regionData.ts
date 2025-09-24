// regionData.ts
export const regionData = {
  uae: {
    name: 'United Arab Emirates',
    states: {
      dubai: {
        name: 'Dubai',
        cities: ['Deira', 'Jumeirah', 'Bur Dubai'],
      },
      abu_dhabi: {
        name: 'Abu Dhabi',
        cities: ['Al Ain', 'Madinat Zayed', 'Ruwais'],
      },
    },
  },
  saudi: {
    name: 'Saudi Arabia',
    states: {
      riyadh: {
        name: 'Riyadh',
        cities: ['Al Malaz', 'Al Olaya', 'Al Batha'],
      },
      jeddah: {
        name: 'Jeddah',
        cities: ['Al Balad', 'Al Hamra', 'Al Safa'],
      },
    },
  },
  qatar: {
    name: 'Qatar',
    states: {
      doha: {
        name: 'Doha',
        cities: ['Al Sadd', 'West Bay', 'The Pearl'],
      },
      al_rayyan: {
        name: 'Al Rayyan',
        cities: ['Al Gharrafa', 'Education City', 'Muaither'],
      },
    },
  },
  oman: {
    name: 'Oman',
    states: {
      muscat: {
        name: 'Muscat',
        cities: ['Ruwi', 'Muttrah', 'Al Khuwair'],
      },
      salalah: {
        name: 'Salalah',
        cities: ['Al Haffa', 'Al Wadi', 'Salalah Gardens'],
      },
    },
  },
} as const;
