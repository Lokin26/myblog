# Professional Profile - M. Balamurugan

A modern, responsive professional profile website built with Next.js, showcasing expertise in AI, ML, and RPA technologies.

## 🌟 Features

- **Modern Design**: Clean, professional layout with responsive design
- **Interactive Elements**: Animated cards and hover effects
- **Comprehensive Sections**:
  - Professional Summary
  - Technical Skills
  - AI & GENAI Excellence
  - Automation Excellence
  - Solution Design & Discovery
  - Certifications & Achievements

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Components**: Custom UI components
- **Deployment**: Azure Static Web Apps

## 📋 Prerequisites

- Node.js 18.x or higher
- npm/yarn package manager
- Git

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Lokin26/myblog.git
cd myblog
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗 Project Structure

```
myblog/
├── public/
│   └── images/          # Static images
├── src/
│   ├── app/
│   │   ├── page.tsx     # Main page component
│   │   └── layout.tsx   # Root layout
│   ├── components/
│   │   └── ui/          # UI components
│   └── styles/          # Global styles
├── next.config.js       # Next.js configuration
└── tailwind.config.js   # Tailwind configuration
```

## 💻 Development

- Make changes to the code
- Test locally using `npm run dev`
- Commit changes:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

## 🌐 Deployment

The site is automatically deployed to Azure Static Web Apps through GitHub Actions when changes are pushed to the main branch.

### Manual Deployment Steps

1. Build the project:
```bash
npm run build
```

2. The static output will be in the `out` directory

3. Deploy using Azure Static Web Apps CLI or through GitHub Actions

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SITE_URL=your-site-url
```

### Custom Domain Setup

1. Go to Azure Portal
2. Navigate to your Static Web App
3. Go to Custom Domains
4. Follow the instructions to add your domain

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

M. Balamurugan - [balamohan_1988@yahoo.co.in](mailto:balamohan_1988@yahoo.co.in)

Project Link: [https://github.com/Lokin26/myblog](https://github.com/Lokin26/myblog)
