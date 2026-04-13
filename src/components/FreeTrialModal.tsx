import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Zap, Flame } from "lucide-react";
import { toast } from "sonner";

interface FreeTrialModalProps {
  children: React.ReactNode;
}

const FreeTrialModal = ({ children }: FreeTrialModalProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in all fields");
      return;
    }
    // Simulate API call
    setTimeout(() => {
      toast.success("Free trial claimed! We will contact you shortly.");
      setOpen(false);
      setFormData({ name: "", phone: "" });
    }, 500);
  };

  const inputClass =
    "w-full bg-secondary/50 border border-foreground/[0.08] px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body text-sm mt-2";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md border-primary/20 bg-background/95 backdrop-blur-xl">
        <DialogHeader className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest px-2 py-1 flex items-center gap-1 rounded-sm">
              <Flame className="w-3 h-3" />
              Only 3 Slots Left This Week!
            </span>
          </div>
          <DialogTitle className="font-display font-black italic uppercase text-3xl md:text-4xl text-foreground leading-[0.95] tracking-tight">
            Claim Your <span className="text-gradient">Free Trial</span>
          </DialogTitle>
          <DialogDescription className="font-body text-muted-foreground mt-2 text-sm md:text-base">
            Experience the real boxing environment. Enter your details to secure your free 1-day access pass.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-xs uppercase tracking-widest text-primary font-bold">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-primary font-bold">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={inputClass}
            />
          </div>

          <Button type="submit" variant="strike" size="lg" className="w-full gap-2 mt-2">
            <Zap className="w-4 h-4" />
            Secure My Spot Now
          </Button>
          <p className="text-[10px] text-muted-foreground text-center mt-2 font-body">
            By claiming, you agree to our gym's terms and conditions.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FreeTrialModal;
