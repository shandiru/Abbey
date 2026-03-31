import { useEffect } from "react";

export default function AssuranceWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assurance.sysnetgs.com/assurancecard/be8e7fbc4499573f54aa6807a82bb2385a9e4a19f1db66f876e9fc528d1cd947/cardJs";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="widget-preview" className="ac-widget"></div>;
}