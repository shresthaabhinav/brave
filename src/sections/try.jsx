export default function SplitSection() {
  return (
    <div className="relative w-full h-[400px] flex flex-col">
      
      {/* 75% Image */}
      <div className="h-[75%]">
        <img
          src="/img/coworkers.jpg"
          alt="section"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 25% White */}
      <div className="h-[25%] bg-white flex items-center justify-center">
      </div>

      {/* Floating Images */}
      <div className="absolute left-1/2 top-[75%] -translate-x-1/2 -translate-y-1/2 flex gap-6">
        
        <img
          src="/img/sAi.jpg"
          alt="img1"
          className="w-40 h-40 object-cover rounded-xl shadow-lg"
        />

        <img
          src="/img/sCloud.jpg"
          alt="img2"
          className="w-40 h-40 object-cover rounded-xl shadow-lg"
        />

      </div>
    </div>
  );
}