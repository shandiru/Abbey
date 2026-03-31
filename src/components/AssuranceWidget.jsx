import { useEffect } from "react";

export default function AssuranceWidget() {
  useEffect(() => {
    // Already loaded check
    if (document.getElementById("assurance-script")) return;

    const script = document.createElement("script");
    script.id = "assurance-script";
    script.src = "https://assurance.sysnetgs.com/assurancecard/be8e7fbc4499573f54aa6807a82bb2385a9e4a19f1db66f876e9fc528d1cd947/cardJs";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      const existing = document.getElementById("assurance-script");
      if (existing) document.body.removeChild(existing);
    };
  }, []);

  return (
    <div
      id="widget-preview"
      className="ac-widget"
      style={{
        zIndex: 999999,
        position: 'fixed',
        right: 0,
        bottom: '20px',
        maxWidth: '100vw',
        overflow: 'hidden',
      }}
    />
  );
}