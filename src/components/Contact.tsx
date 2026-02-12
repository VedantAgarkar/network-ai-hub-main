import { useState } from "react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useDayNight } from "@/hooks/useDayNight";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "agarkarvedant@gmail.com",
    href: "mailto:agarkarvedant@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9561924895",
    href: "tel:+919561924895",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "vedant-agarkar",
    href: "https://www.linkedin.com/in/vedant-agarkar-786b81310",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const isDaytime = useDayNight();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section 
      id="contact" 
      className="py-20 transition-colors duration-1000"
      style={{ 
        backgroundColor: isDaytime ? '#ffffff' : '#170d27',
        color: isDaytime ? '#1a1a1a' : '#ffffff'
      }}
    >
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">Let's Connect</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent-foreground mx-auto rounded-full" />
            <p className={`max-w-2xl mx-auto ${isDaytime ? 'text-muted-foreground' : 'text-gray-300'}`}>
              Have a project in mind or want to discuss collaboration opportunities? 
              I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 animate-fade-in">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`border-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  isDaytime ? 'bg-card' : 'bg-[#2a2438] border-purple-500/30'
                }`}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-2 ${isDaytime ? 'text-foreground' : 'text-white'}`}>{info.label}</h3>
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent-foreground transition-colors break-all"
                    >
                      {info.value}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className={`border-primary/20 animate-fade-in ${
            isDaytime ? 'bg-card' : 'bg-[#2a2438] border-purple-500/30'
          }`}>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className={`text-sm font-medium ${isDaytime ? 'text-foreground' : 'text-gray-300'}`}>
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className={`border-primary/20 ${!isDaytime && 'bg-[#1a1425] border-purple-500/30 text-white placeholder:text-gray-500'}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className={`text-sm font-medium ${isDaytime ? 'text-foreground' : 'text-gray-300'}`}>
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className={`border-primary/20 ${!isDaytime && 'bg-[#1a1425] border-purple-500/30 text-white placeholder:text-gray-500'}`}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className={`text-sm font-medium ${isDaytime ? 'text-foreground' : 'text-gray-300'}`}>
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className={`min-h-[150px] border-primary/20 ${!isDaytime && 'bg-[#1a1425] border-purple-500/30 text-white placeholder:text-gray-500'}`}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
