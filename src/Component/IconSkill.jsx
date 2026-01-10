 export function SkillIcon({src,alt,text}) {
    return(
     <div className="p-4 relative group w-fit:" >
            <img
              src={src}
              alt={alt}
              className={`logo `}

          ></img>
        
            <span className="     absolute left-1/2 -translate-x-1/2 top-full mt-3
          px-4 py-1.5 text-sm text-gray-200
          rounded-lg
          bg-black/60 backdrop-blur-md
          border border-white/10
          opacity-0
          group-hover:opacity-100
          group-hover:translate-y-1
          transition-all duration-300 ease-out
          shadow-lg">{text}
            </span>
           </div>
    )
  }