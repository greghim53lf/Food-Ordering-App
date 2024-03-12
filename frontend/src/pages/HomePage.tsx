import landingImage from "@/assets/landing.png";
import appDownloadImage from "@/assets/appDownload.png";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 opacity-90">
        <h1 className="text-5xl font-bold tracking-tight text-lime-700">
          Get green
        </h1>
        <span className="text-xl">Better health is a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="landing image" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            A faster way to get greener!
          </span>
          <span>
            Download the Greenie App for faster ordering and personalised
            recommendations
          </span>
          <img
            className="cursor-pointer"
            src={appDownloadImage}
            alt="download links"
          />
        </div>
      </div>
    </div>
  );
}