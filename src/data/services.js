import { 
  Target, 
  Search, 
  Rocket,
  Facebook,
  Youtube,
  Globe,
  Megaphone,
  BarChart,
  CheckCircle,
  Settings,
  Smartphone,
  Share2
} from 'lucide-react'



export const services = [
  {
    id: 'digital-advertising',
    icon: Target,
    title: 'Digital Advertising',
    description: 'Facebook Ads, YouTube Ads, Google Ads, TikTok Ads',
    link: '/services/digital-advertising',
    image: '/s1.jpg',
    longDescription: 'Comprehensive digital advertising solutions to help your business reach the right audience at the right time.',
    platforms: [
      {
        name: 'Facebook Ads',
        icon: Facebook,
        description: 'Targeted advertising on Facebook and Instagram to reach your ideal customers.',
        benefits: [
          'Precise audience targeting',
          'Visual-rich ad formats',
          'Cost-effective campaigns',
          'Real-time performance tracking'
        ]
      },
      {
        name: 'YouTube Ads',
        icon: Youtube,
        description: 'Video advertising on the world\'s largest video platform.',
        benefits: [
          'Massive reach potential',
          'Engaging video formats',
          'Detailed viewer analytics',
          'Brand awareness building'
        ]
      },
      {
        name: 'Google Ads',
        icon: Globe,
        description: 'Search and display advertising across Google\'s network.',
        benefits: [
          'Intent-based targeting',
          'Immediate visibility',
          'Flexible budget options',
          'Performance optimization'
        ]
      },
      {
        name: 'TikTok Ads',
        icon: Megaphone,
        description: 'Engaging advertising on the fastest-growing social platform.',
        benefits: [
          'Young audience reach',
          'Creative ad formats',
          'Viral potential',
          'High engagement rates'
        ]
      }
    ],
    features: [
      {
        title: 'Advanced Targeting',
        icon: Target,
        description: 'Reach your ideal audience with precision'
      },
      {
        title: 'Campaign Management',
        icon: Settings,
        description: 'Comprehensive campaign management and optimization'
      },
      {
        title: 'Analytics & Reporting',
        icon: BarChart,
        description: 'Detailed insights and performance tracking'
      },
      {
        title: 'A/B Testing',
        icon: Share2,
        description: 'Optimize your campaigns through testing'
      },
      {
        title: 'Budget Optimization',
        icon: CheckCircle,
        description: 'Maximize ROI with smart budget allocation'
      },
      {
        title: 'Creative Development',
        icon: Smartphone,
        description: 'Engaging creative assets for all platforms'
      }
    ],
    stats: [
      {
        value: '200%',
        label: 'Average ROI'
      },
      {
        value: '5M+',
        label: 'Ad Impressions'
      },
      {
        value: '85%',
        label: 'Client Satisfaction'
      }
    ]
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your website rankings with our expert SEO services',
    link: '/services/seo',
    image: '/s2.jpg',
    longDescription: 'Comprehensive SEO solutions to improve your website\'s visibility and organic traffic.',
    features: [
      'Keyword Research & Strategy',
      'On-Page SEO Optimization',
      'Technical SEO Audit',
      'Content Strategy',
      'Link Building',
      'Local SEO'
    ],
    stats: [
      {
        value: '80%',
        label: 'Traffic Increase'
      },
      {
        value: '65%',
        label: 'Conversion Rate'
      },
      {
        value: '90%',
        label: 'Client Retention'
      }
    ],
    tools: [
      'Google Analytics',
      'SEMrush',
      'Ahrefs',
      'Google Search Console'
    ]
  },
  {
    id: 'aso',
    icon: Rocket,
    title: 'ASO Services',
    description: 'Optimize your app store presence for maximum visibility',
    link: '/services/aso',
    image: '/s3.jpg',
    longDescription: 'App Store Optimization services to improve your app\'s visibility and downloads.',
    features: [
      {
        title: 'Keyword Optimization',
        icon: Search,
        description: 'Strategic keyword research and implementation'
      },
      {
        title: 'Visual Asset Optimization',
        icon: Settings,
        description: 'Optimize screenshots, icons, and preview videos'
      },
      {
        title: 'Store Listing Enhancement',
        icon: CheckCircle,
        description: 'Optimize app descriptions and metadata'
      },
      {
        title: 'Competitor Analysis',
        icon: Target,
        description: 'In-depth analysis of competitor strategies'
      },
      {
        title: 'Performance Tracking',
        icon: BarChart,
        description: 'Monitor and analyze app performance'
      },
      {
        title: 'Review Management',
        icon: Share2,
        description: 'Manage and respond to user reviews'
      }
    ],
    stats: [
      {
        value: '150%',
        label: 'Download Increase'
      },
      {
        value: '70%',
        label: 'Visibility Boost'
      },
      {
        value: '95%',
        label: 'Success Rate'
      }
    ],
    platforms: [
      {
        name: 'Apple App Store',
        icon: Smartphone,
        description: 'Optimize for iOS app visibility',
        benefits: [
          'iOS-specific optimization',
          'App Store guidelines compliance',
          'iOS user targeting',
          'Apple Search Ads integration'
        ]
      },
      {
        name: 'Google Play Store',
        icon: Globe,
        description: 'Optimize for Android app visibility',
        benefits: [
          'Android-specific optimization',
          'Play Store guidelines compliance',
          'Android user targeting',
          'Google Ads integration'
        ]
      },
      {
        name: 'Huawei App Gallery',
        icon: Smartphone,
        description: 'Optimize for Huawei devices',
        benefits: [
          'Huawei-specific optimization',
          'App Gallery guidelines compliance',
          'Huawei user targeting',
          'Regional optimization'
        ]
      },
      {
        name: 'Samsung Galaxy Store',
        icon: Smartphone,
        description: 'Optimize for Samsung devices',
        benefits: [
          'Samsung-specific optimization',
          'Galaxy Store guidelines compliance',
          'Samsung user targeting',
          'Regional optimization'
        ]
      }
    ]
  }
] 