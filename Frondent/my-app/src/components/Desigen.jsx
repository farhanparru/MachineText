import React from "react";
import first from '../assets/images/chocolate-frappuccino-table.jpg'
import seond from '../assets/images/8381332.jpg'

const BrunchCocktails = () => {
  return (
    <div className="bg-black text-white font-sans py-10 px-6">
   
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-red-600 tracking-wide">
          — BRUNCH COCKTAILS —
        </h2>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
       
        <div className="flex justify-center">
          <img
            src={first}
            alt="Cocktail Left"
            className="h-48 object-contain"
          />
        </div>

     
        <div>
          <div className="space-y-8">
       
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Cinnamon Toast Crunch</h3>
                <p className="text-sm text-gray-400">
                  Skrewball peanut butter whiskey, vanilla extract, Amaretto,
                  baileys, egg white, cinnamon
                </p>
              </div>
              <p className="text-lg font-bold text-gray-200">$16</p>
            </div>

       
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Bar 42 Mary</h3>
                <p className="text-sm text-gray-400">
                  Tito's, tomato juice, Worcestershire, celery salt, black
                  pepper, tabasco, fully loaded
                </p>
              </div>
              <p className="text-lg font-bold text-gray-200">$14</p>
            </div>

        
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Moet Spritz</h3>
                <p className="text-sm text-gray-400">
                  Aperol, St Germain, botanical liquor, fresh lime juice, mini
                  brut Moet topper
                </p>
              </div>
              <p className="text-lg font-bold text-gray-200">$20</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={seond}
            alt="Cocktail Right"
            className="h-48 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default BrunchCocktails;
