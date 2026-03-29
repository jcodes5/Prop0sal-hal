import { Heart } from "lucide-react";

const PoemPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-pink-300 text-4xl animate-bounce">✨</div>
      <div className="absolute bottom-20 right-10 text-purple-300 text-4xl animate-pulse">💖</div>
      <div className="absolute top-1/3 right-1/4 text-pink-200 text-3xl animate-ping">💕</div>
      
      <div className="relative z-10 max-w-2xl w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-pink-200">
        <div className="flex justify-center mb-8">
          <Heart className="w-16 h-16 text-pink-500 fill-current" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-10">
          A Poem For Us
        </h1>
        
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-700 font-serif leading-relaxed italic">
              In the garden of my heart, you bloom,<br />
              Like roses kissed by morning dew.<br />
              Your laughter is the sweetest song,<br />
              With you, my world feels truly strong.
            </p>
          </div>
          
          <div className="border-t border-pink-200 pt-6"></div>
          
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-700 font-serif leading-relaxed italic">
              When words fail, the heart speaks true,<br />
              Of all the joy that comes from you.<br />
              Two poets sharing verse and dreams,<br />
              Building castles out of sunbeams.
            </p>
          </div>
          
          <div className="border-t border-pink-200 pt-6"></div>
          
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-700 font-serif leading-relaxed italic">
              Forever yours, forever free,<br />
              Writing our love's poetry.<br />
              May our verses never end,<br />
              My beloved, my closest friend.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 font-medium">
            Written with all my love, for you
          </p>
          <p className="text-pink-600 font-semibold mt-2">
            &mdash; Your Devoted Poet
          </p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600 max-w-md">
          "Love is the bridge between two hearts, and poetry is the language it speaks."
        </p>
      </div>
    </div>
  );
};

export default PoemPage;