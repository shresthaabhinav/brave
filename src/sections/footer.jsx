export default function Footer() {
  return (
    <div className="bg-black text-white text-center py-4">
      © {new Date().getFullYear()} <span className="inline-block font-bold bg-gradient-to-r from-violet-600 to-orange-400 bg-clip-text text-transparent">DD Digital World.</span> All Rights Reserved
    </div>
  );
}