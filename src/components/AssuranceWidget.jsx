import { useEffect } from "react";

export default function AssuranceWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assurance.sysnetgs.com/assurancecard/be8e7fbc4499573f54aa6807a82bb2385a9e4a19f1db66f876e9fc528d1cd947/cardJs";
    script.async = true;

    script.onload = () => {
      // Script load ஆன உடனே duplicate cards remove பண்ணு
      const widget = document.getElementById("widget-preview");
      if (widget) {
        while (widget.children.length > 1) {
          widget.removeChild(widget.lastChild);
        }
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="widget-preview"
      className="ac-widget"
      style={{
        position: "fixed",
        right: 0,
        bottom: "20px",
        zIndex: 999999,
        cursor: "pointer",
      }}
    />
  );
}