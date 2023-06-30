import FontPicker from "font-picker-react";
import React, { useState } from "react";

const FontPickerDemo = () => {
  const [activeFont, setActiveFont] = useState({
    activeFontFamily: "Open Sans",
  });

  return (
    <>
      <div className=" ">
        <div className="flex items-center justify-center">
          <FontPicker
            apiKey="AIzaSyBhZ6N1OzyXAHsrubZYVTTLscBnSrbWoU0"
            activeFontFamily={activeFont.activeFontFamily}
            onChange={(nextFont) =>
              setActiveFont({
                activeFontFamily: nextFont.family,
              })
            }
          />
        </div>
        <div className="apply-font">
          <p className=" max-w-5xl mx-auto m-10">
            The font will be applied to this text Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam quae accusantium culpa
            temporibus, qui alias, iusto hic animi nemo vitae blanditiis esse
            laborum quidem eligendi ad architecto. Esse, ex vel.
          </p>
          <p className="max-w-5xl mx-auto m-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            ducimus ea delectus non pariatur sint fuga obcaecati tempora cum
            amet minima, laudantium eligendi at beatae, aspernatur adipisci eos,
            ipsa ullam rem iusto id? Quod adipisci quae doloribus recusandae
            voluptatem, repellendus qui. Ea, commodi libero! Alias dolorum
            necessitatibus, saepe dignissimos corporis vitae aliquid ratione
            porro ut impedit quae? Asperiores repellendus deleniti, sed quos
            suscipit illo, consectetur distinctio explicabo architecto aliquid,
            magnam alias! Voluptatibus quasi molestias quibusdam ipsam ipsa
            itaque delectus corporis distinctio nam cum dolor accusantium
            officiis doloribus consequatur molestiae, rerum repellendus minus
            quos. Numquam reiciendis natus consequatur. Exercitationem, dolorem
            eaque.
          </p>
        </div>
      </div>
    </>
  );
};

export default FontPickerDemo;
