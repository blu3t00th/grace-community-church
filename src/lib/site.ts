export const siteConfig = {
  name: 'Grace Community Church',
  shortName: 'Grace Church',
  url: 'https://blu3t00th.github.io/grace-community-church',
  description:
    'A welcoming church family in Stockholm, Sweden where people can encounter Jesus, grow in faith, and serve their city.',
  location: 'Stockholm, Sweden',
  serviceTime: 'Sundays at 10:30 AM',
  email: 'hello@gracechurch.example',
  phone: '+46 70 000 00 00',
  address: 'Drottninggatan 1, 111 51 Stockholm, Sweden'
} as const;

export const primaryNav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/visit', label: 'Visit' },
  { href: '/sermons', label: 'Sermons' },
  { href: '/events', label: 'Events' },
  { href: '/news', label: 'News' },
  { href: '/ministries', label: 'Ministries' },
  { href: '/giving', label: 'Giving' },
  { href: '/contact', label: 'Contact' }
] as const;

export const ministries = [
  {
    title: 'Kids Ministry',
    summary:
      'Safe, joyful Sunday environments where children learn the story of Jesus through worship, teaching, and play.'
  },
  {
    title: 'Youth Ministry',
    summary:
      'A place for teenagers to build friendships, ask honest questions, and grow in everyday faith.'
  },
  {
    title: 'Worship Team',
    summary:
      'Musicians and vocalists serving with excellence to help the church encounter God in worship.'
  },
  {
    title: 'Small Groups',
    summary:
      'Midweek groups meeting across Stockholm for prayer, Bible study, meals, and real community.'
  },
  {
    title: 'Outreach',
    summary:
      'Serving local needs through practical compassion, partnerships, and neighborhood initiatives.'
  },
  {
    title: 'Prayer',
    summary:
      'Intercessory teams and gatherings focused on seeking God and standing with people in every season.'
  }
] as const;
