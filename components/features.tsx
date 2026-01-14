import { useTranslations } from "next-intl";
import { Video, Image as ImageIcon, Music } from "lucide-react";

export default function Features() {
  const t = useTranslations("Features");

  const features = [
    {
      icon: Video,
      title: t("video"),
      desc: t("video_desc"),
      color: "text-blue-500",
    },
    {
      icon: ImageIcon,
      title: t("image"),
      desc: t("image_desc"),
      color: "text-green-500",
    },
    {
      icon: Music,
      title: t("audio"),
      desc: t("audio_desc"),
      color: "text-purple-500",
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className={`p-4 rounded-full bg-muted mb-4 ${feature.color}`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
