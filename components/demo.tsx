"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Upload, FileVideo, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL } from "@ffmpeg/util";

export default function Demo() {
  const t = useTranslations("Demo");
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [file, setFile] = useState<File | null>(null);

  const load = async () => {
    setIsLoading(true);
    const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
    const ffmpeg = new FFmpeg();

    try {
      await ffmpeg.load({
        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
        wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm"),
      });
      setLoaded(true);
    } catch (error) {
      console.error("Failed to load FFmpeg", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <section id="demo" className="py-20">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-8">
            {!loaded ? (
              <div className="flex flex-col items-center justify-center space-y-4 py-8">
                <FileVideo className="w-16 h-16 text-muted-foreground/50" />
                <div className="text-center">
                  {/* <p className="text-muted-foreground mb-4">{t("load_ffmpeg")}</p> */}
                  <Button onClick={load} disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isLoading ? "Loading..." : t("load_ffmpeg")}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed rounded-lg p-12 text-center hover:bg-muted/50 transition-colors cursor-pointer relative">
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
                <div className="flex flex-col items-center gap-2">
                  <Upload className="w-10 h-10 text-muted-foreground" />
                  <h3 className="text-lg font-semibold">{file ? file.name : t("drop_title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("drop_sub")}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
