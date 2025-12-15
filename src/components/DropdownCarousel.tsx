"use client";
import { useState, useEffect, useRef } from "react";
import HorizontalImageCarousel from "./HorizontalImageCarousel";

interface DropdownMenu {
  mainMenu: string;
  subMenus: string[];
}

interface DropdownCarouselProps {
  dropdownMenus: DropdownMenu[];
  interval?: number;
}

export default function DropdownCarousel({ 
  dropdownMenus, 
  interval = 2000 
}: DropdownCarouselProps) {
  // Initialize with first menu and first submenu
  const [selectedMainMenu, setSelectedMainMenu] = useState<string | null>(
    dropdownMenus[0]?.mainMenu || null
  );
  const [selectedSubMenu, setSelectedSubMenu] = useState<string | null>(
    dropdownMenus[0]?.subMenus[0] || null
  );
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const mainMenuRef = useRef<HTMLDivElement>(null);
  const subMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mainMenuRef.current && !mainMenuRef.current.contains(event.target as Node)) {
        setIsMainMenuOpen(false);
      }
      if (subMenuRef.current && !subMenuRef.current.contains(event.target as Node)) {
        setIsSubMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Generate image paths based on selected menu
  const getImages = () => {
    if (!selectedMainMenu || !selectedSubMenu) {
      // Default images - show first menu's first submenu
      const firstMenu = dropdownMenus[0];
      const firstSubMenu = firstMenu?.subMenus[0];
      if (firstSubMenu) {
        return generateImagePaths(firstMenu.mainMenu, firstSubMenu);
      }
      return [];
    }
    return generateImagePaths(selectedMainMenu, selectedSubMenu);
  };

  // Generate image paths based on menu and submenu
  const generateImagePaths = (mainMenu: string, subMenu: string) => {
    // Convert menu names to folder-friendly format
    const mainFolder = mainMenu.replace(/\s+/g, "-").toLowerCase();
    const subFolder = subMenu.replace(/\s+/g, "-").toLowerCase();
    
    // Generate 5 image paths
    return Array.from({ length: 5 }, (_, i) => 
      `/Greeting/${mainFolder}/${subFolder}/${i + 1}.png`
    );
  };

  const handleMainMenuSelect = (mainMenu: string) => {
    setSelectedMainMenu(mainMenu);
    setIsMainMenuOpen(false);
    // Auto-select first submenu of selected main menu
    const menu = dropdownMenus.find(m => m.mainMenu === mainMenu);
    if (menu && menu.subMenus.length > 0) {
      setSelectedSubMenu(menu.subMenus[0]);
      setIsSubMenuOpen(false);
    }
  };

  const handleSubMenuSelect = (subMenu: string) => {
    setSelectedSubMenu(subMenu);
    setIsSubMenuOpen(false);
  };

  const selectedMenu = dropdownMenus.find(m => m.mainMenu === selectedMainMenu);
  const images = getImages();

  return (
    <div className="w-full">
      {/* Dropdowns */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
        {/* Main Menu Dropdown */}
        <div ref={mainMenuRef} className="relative w-full md:w-auto min-w-[250px]">
          <button
            onClick={() => {
              setIsMainMenuOpen(!isMainMenuOpen);
              setIsSubMenuOpen(false);
            }}
            className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500/80 to-purple-500/80 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-between shadow-lg"
          >
            <span>{selectedMainMenu || "Select Category"}</span>
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${isMainMenuOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isMainMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-white/10 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
              {dropdownMenus.map((menu, index) => (
                <button
                  key={index}
                  onClick={() => handleMainMenuSelect(menu.mainMenu)}
                  className={`w-full px-6 py-3 text-left text-sm transition-colors duration-200 ${
                    selectedMainMenu === menu.mainMenu
                      ? "bg-indigo-500/30 text-white"
                      : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                  } ${index === 0 ? 'rounded-t-lg' : ''} ${index === dropdownMenus.length - 1 ? 'rounded-b-lg' : ''}`}
                >
                  {menu.mainMenu}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Sub Menu Dropdown */}
        {selectedMenu && (
          <div ref={subMenuRef} className="relative w-full md:w-auto min-w-[250px]">
            <button
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-between shadow-lg"
            >
              <span>{selectedSubMenu || "Select Sub Category"}</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${isSubMenuOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isSubMenuOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-white/10 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
                {selectedMenu.subMenus.map((subMenu, index) => (
                  <button
                    key={index}
                    onClick={() => handleSubMenuSelect(subMenu)}
                    className={`w-full px-6 py-3 text-left text-sm transition-colors duration-200 ${
                      selectedSubMenu === subMenu
                        ? "bg-purple-500/30 text-white"
                        : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                    } ${index === 0 ? 'rounded-t-lg' : ''} ${index === selectedMenu.subMenus.length - 1 ? 'rounded-b-lg' : ''}`}
                  >
                    {subMenu}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Carousel */}
      {images.length > 0 && (
        <HorizontalImageCarousel 
          images={images}
          interval={interval}
        />
      )}
    </div>
  );
}

