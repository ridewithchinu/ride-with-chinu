import { motion } from 'motion/react';
import { Check, Shield, Mountain, Sunrise, CloudRain, Snowflake, Camera } from 'lucide-react';

export function PackingList() {
  const packingCategories = [
    {
      title: "Common Essentials",
      icon: <Shield className="w-6 h-6" />,
      items: [
        "Government ID",
        "Cash for remote places",
        "Power bank",
        "Mobile charger",
        "Water bottle",
        "Basic medicines",
        "Comfortable walking shoes",
        "Warm layer for evenings",
        "Toiletries",
        "Small day backpack"
      ]
    },
    {
      title: "For Hill Stations",
      icon: <Mountain className="w-6 h-6" />,
      items: [
        "Light woolens in most seasons",
        "Jacket for evenings",
        "Sunglasses",
        "Comfortable shoes",
        "Umbrella or light rain protection",
        "Camera / binoculars for viewpoints"
      ]
    },
    {
      title: "For Pilgrimage Travel",
      icon: <Sunrise className="w-6 h-6" />,
      items: [
        "Modest clothing",
        "Easy slip-on footwear",
        "Personal medicines",
        "Rain cover",
        "Thermal wear for high-altitude shrines",
        "ID and registration documents",
        "Cash",
        "Walking stick for difficult routes"
      ]
    },
    {
      title: "For Trekking & High-Altitude",
      icon: <Mountain className="w-6 h-6" />,
      items: [
        "Trekking shoes",
        "Thermal layers",
        "Windproof jacket",
        "Rain poncho",
        "Gloves & Woolen cap",
        "Sunscreen & Sunglasses",
        "Water bottle & Energy snacks",
        "Trek pole",
        "Personal first aid",
        "Altitude medication if prescribed"
      ]
    },
    {
      title: "For Wildlife & Jungle",
      icon: <Camera className="w-6 h-6" />,
      items: [
        "Earth-tone clothing",
        "Binoculars",
        "Camera",
        "Insect repellent",
        "Closed shoes",
        "ID for safari permits",
        "Minimal luggage"
      ]
    },
    {
      title: "For Monsoon Travel",
      icon: <CloudRain className="w-6 h-6" />,
      items: [
        "Waterproof jacket",
        "Poncho",
        "Anti-slip footwear",
        "Waterproof bag cover",
        "Extra socks",
        "Medicines for cold and stomach issues"
      ]
    },
    {
      title: "For Winter Travel",
      icon: <Snowflake className="w-6 h-6" />,
      items: [
        "Thermal innerwear",
        "Heavy jacket",
        "Gloves & Wool socks",
        "Beanie & Lip balm",
        "Moisturizer",
        "Snow-friendly footwear"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Packing Guide</h1>
        <p className="text-lg text-muted-foreground">
          Uttarakhand's diverse terrain and weather require careful packing. Here's what you need based on your travel style.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packingCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="p-2 bg-primary/10 text-primary rounded-lg">
                {category.icon}
              </div>
              <h2 className="text-xl font-heading font-bold">{category.title}</h2>
            </div>
            <ul className="space-y-3">
              {category.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
