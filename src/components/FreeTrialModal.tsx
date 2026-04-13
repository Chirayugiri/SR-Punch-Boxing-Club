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
import { Zap, ShieldAlert } from "lucide-react";
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
      toast.error("IDENTIFICATION REQUIRED: PLEASE FILL ALL FIELDS");
      return;
    }
    // Simulate API call
    setTimeout(() => {
      toast.success("TRANSMISSION SUCCESSFUL: COMMAND TEAM CONTACTING YOU SOON.");
      setOpen(false);
      setFormData({ name: "", phone: "" });
    }, 500);
  };

  const inputClass =
    "w-full bg-background border border-white/10 px-4 py-4 text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-colors font-display font-bold text-xs tracking-widest mt-2 rounded-none";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md border-white/5 bg-[#0d0d0d] rounded-none p-10">
        <DialogHeader className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary text-foreground text-[8px] font-display font-black uppercase tracking-widest px-3 py-1 flex items-center gap-2">
              <ShieldAlert className="w-3 h-3" />
              CRITICAL: 5 SLOTS REMAINING
            </span>
          </div>
          <DialogTitle className="font-display font-black uppercase text-3xl md:text-4xl text-foreground leading-none tracking-tighter">
            CLAIM YOUR <span className="text-gradient">PASS</span>
          </DialogTitle>
          <DialogDescription className="font-body text-muted-foreground mt-4 text-sm leading-relaxed">
            INITIATE YOUR TRANSFORMATION. ENTER YOUR COORDINATES TO SECURE ELITE 1-DAY ACCESS.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="label-tactical !text-[10px]">
              OPERATIVE_NAME
            </label>
            <input
              type="text"
              placeholder="IDENTIFY YOURSELF"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClass}
            />
          </div>
          <div>
            <label className="label-tactical !text-[10px]">
              COMMS_LINE (PHONE)
            </label>
            <input
              type="tel"
              placeholder="+91 00000 00000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={inputClass}
            />
          </div>

          <Button type="submit" variant="strike" className="w-full h-18 gap-3 mt-4 text-xs tracking-[0.25em]">
            <Zap className="w-4 h-4" />
            SECURE ACCESS PASS
          </Button>
          <p className="text-[8px] text-muted-foreground text-center mt-2 font-display font-bold uppercase tracking-widest opacity-40">
            By proceeding, you accept all station protocols & terms.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FreeTrialModal;
