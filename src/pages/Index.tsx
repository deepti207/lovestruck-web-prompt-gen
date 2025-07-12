import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import floatingHeartsImage from "@/assets/floating-hearts.png";

const Index = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = (choice: string) => {
    setSelectedButton(choice);
    setTimeout(() => {
      setShowMessage(true);
    }, 500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="float-hearts absolute top-10 left-10 opacity-30">
          <Heart className="w-8 h-8 text-primary heart-pulse" />
        </div>
        <div className="float-hearts absolute top-20 right-20 opacity-40" style={{animationDelay: '1s'}}>
          <Heart className="w-6 h-6 text-secondary heart-pulse" />
        </div>
        <div className="float-hearts absolute bottom-32 left-1/4 opacity-25" style={{animationDelay: '2s'}}>
          <Heart className="w-10 h-10 text-accent heart-pulse" />
        </div>
        <div className="float-hearts absolute bottom-20 right-1/3 opacity-35" style={{animationDelay: '3s'}}>
          <Heart className="w-7 h-7 text-primary heart-pulse" />
        </div>
        <div className="float-hearts absolute top-1/2 left-8 opacity-30" style={{animationDelay: '4s'}}>
          <Heart className="w-5 h-5 text-secondary heart-pulse" />
        </div>
        <div className="float-hearts absolute top-1/3 right-12 opacity-40" style={{animationDelay: '5s'}}>
          <Heart className="w-9 h-9 text-accent heart-pulse" />
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="fade-in-up mb-8" style={{animationDelay: '0.2s'}}>
            <h1 className="text-romantic-title mb-6">
              For Unnati 💖
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Unnati, will you be mine?
            </h2>
            <p className="text-romantic-subtitle mb-2">
              Since the day you said you liked me, everything has felt magical.
            </p>
            <p className="text-romantic-subtitle">
              And now… it's my turn to ask.
            </p>
          </div>

          {/* Buttons */}
          <div className="fade-in-up mb-12" style={{animationDelay: '0.8s'}}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              <Button
                variant="romantic-lavender"
                size="xl"
                onClick={() => handleButtonClick("Yes 💜")}
                disabled={selectedButton !== null}
                className="w-full"
              >
                Yes 💜
              </Button>
              
              <Button
                variant="romantic-blue"
                size="xl"
                onClick={() => handleButtonClick("Of Course 💙")}
                disabled={selectedButton !== null}
                className="w-full"
              >
                Of Course 💙
              </Button>

              <Button
                variant="romantic-purple"
                size="xl"
                onClick={() => handleButtonClick("On Chat 💬")}
                disabled={selectedButton !== null}
                className="w-full"
              >
                On Chat 💬
              </Button>

              <Button
                variant="romantic-gray"
                size="xl"
                onClick={() => handleButtonClick("Later ⏳")}
                disabled={selectedButton !== null}
                className="w-full"
              >
                Later ⏳
              </Button>
            </div>
          </div>

          {/* Thank You Message */}
          {selectedButton && (
            <div className={`${showMessage ? 'reveal-message' : 'opacity-0'}`}>
              <div className="mb-4">
                <p className="text-xl font-medium text-foreground">
                  You selected: {selectedButton}
                </p>
              </div>
              
              <Card className="max-w-2xl mx-auto p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/20 shadow-[var(--shadow-dreamy)]">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎁</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Secret Message Unlocked!
                  </h3>
                  <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4">
                    <p>You said yes... and my heart is dancing.</p>
                    <p>This is the start of something beautiful, Unnati.</p>
                    <p>You're special, and I'm so lucky to have your smile in my world.</p>
                  </div>
                  <div className="mt-6 text-xl font-medium text-foreground">
                    – Yours always, Stavya 💌
                  </div>
                  
                  {/* Celebration Hearts */}
                  <div className="flex justify-center gap-2 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <Heart 
                        key={i} 
                        className="w-6 h-6 text-primary heart-pulse" 
                        style={{animationDelay: `${i * 0.2}s`}}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Signature */}
          <div className="fade-in-up mt-16 opacity-70" style={{animationDelay: '1.4s'}}>
            <p className="text-sm text-muted-foreground">
              Made with 💖 for the most wonderful person in my world
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
