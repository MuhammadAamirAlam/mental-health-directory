# Pakistan Mental Health Resource Directory

A comprehensive directory of mental health resources across Pakistan, helping users find helplines, NGOs, hospitals, online therapy platforms, and therapists. Built with React and Vite.

## Features

- **Search Functionality**: Search resources by city name or organization name
- **Multi-Filter System**: Filter by province, type of service, and cost (free/paid)
- **Bilingual Support**: Toggle between English and Urdu (اردو) language
- **Comprehensive Database**: 25+ verified mental health resources across Pakistan
- **Responsive Design**: Mobile-friendly interface with calming purple color scheme
- **Resource Types**:
  - Helplines (24/7 crisis support)
  - NGOs (non-profit organizations)
  - Hospitals (psychiatric departments)
  - Online platforms (teletherapy)
  - Therapists (private counseling)

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom design system
- **No external dependencies** - Pure React with useState and useEffect only

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd mental-health-directory
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── ResourceCard.jsx    # Individual resource card component
│   └── SearchFilter.jsx    # Search and filter controls
├── data/
│   └── resources.json      # Resource database (25+ entries)
├── pages/                  # (reserved for future pages)
├── App.jsx                 # Main application component
├── main.jsx                # React entry point
└── index.css               # Global styles and design system
```

## Usage

### Searching

- Type a city name (e.g., "Karachi", "Lahore") or organization name in the search bar
- Results update in real-time as you type

### Filtering

- **Province**: Select from Punjab, Sindh, KPK, Balochistan, Federal, or All Pakistan
- **Type**: Filter by Helpline, NGO, Hospital, Online, or Therapist
- **Cost**: Show only free resources if needed

### Language Toggle

- Click the "اردو" button in the top-right corner to switch to Urdu
- Resource names, descriptions, and interface text will display in Urdu

## Data Structure

Each resource in `resources.json` contains:

- `id`: Unique identifier
- `name` / `nameUrdu`: Organization name in English and Urdu
- `type`: Resource category (helpline, ngo, hospital, online, therapist)
- `province` / `city`: Location information
- `phone`: Contact number (if available)
- `website`: Official website (if available)
- `email`: Contact email (if available)
- `description` / `descriptionUrdu`: Service description
- `services`: Array of services offered
- `free`: Boolean indicating if services are free
- `available24h`: Boolean indicating 24/7 availability

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Contributing

Contributions are welcome! To add new resources:

1. Edit `src/data/resources.json`
2. Add a new resource object following the existing structure
3. Include both English and Urdu translations where possible
4. Submit a pull request

## License

This project is open source and available for educational purposes.

## Disclaimer

This directory is for informational purposes only. Always verify information directly with the organizations listed. In case of mental health emergencies, please contact emergency services or crisis helplines immediately.

## Acknowledgments

- All organizations listed in this directory for their vital mental health services
- The mental health professionals and volunteers working across Pakistan
