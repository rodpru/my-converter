import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t py-12 bg-muted/20">
      <div className="px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">MediaConvert</span>
          </div>
          <p className="text-sm text-muted-foreground">{t("copyright")}</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              {t("newsletter")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
