
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const tourBookingSchema = z.object({
  tourTitle: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  country: z.string().min(2, "Please enter your country"),
  arrivalDate: z.date({
    required_error: "Please select your arrival date",
  }),
  departureDate: z.date({
    required_error: "Please select your departure date",
  }).optional(),
  numPeople: z.number().min(1, "Must have at least 1 person").default(1),
  specialRequests: z.string().optional(),
});

export function TourBookingForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedTour, setSelectedTour] = useState("");

  const tours = [
    "Golden Monkey Trekking - $200/person",
    "Dian Fossey Tomb - $250/person",
    "Kings Palace Museum - Nyanza - $100/person",
    "Pilgrimage to Kibeho - $100/person",
    "Akagera National Park Safari - $200/person",
    "Campaign Against Genocide & Richard Kandt Museums - $50/person",
    "Kigali City Walking Tour - $20/person",
    "Museums of Rwanda Tour - $100/person",
    "Mount Kigali Hiking Adventure - $40/person",
    "Rwanda Mountain Hiking Experience - $150/person",
  ];

  const form = useForm<z.infer<typeof tourBookingSchema>>({
    resolver: zodResolver(tourBookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      numPeople: 1,
      specialRequests: "",
    },
  });

  const handleTourSelect = (tourName: string) => {
    setSelectedTour(tourName);
    form.setValue("tourTitle", tourName);
  };

  const onSubmit = async (data: z.infer<typeof tourBookingSchema>) => {
    setIsSubmitting(true);
    
    // Extract price and duration from the selected tour
    const selectedTourInfo = tours.find(tour => tour.includes(selectedTour.split(" - ")[0])) || "";
    const tourTitle = selectedTour || "Custom Tour";
    const tourPrice = selectedTourInfo.split(" - ")[1] || "Custom Price";
    const tourDuration = "Custom Duration";
    
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tourTitle,
          tourPrice,
          tourDuration,
          to: "murisaregis@gmail.com",
          subject: `New Tour Booking: ${tourTitle}`,
          name: data.name,
          email: data.email,
          phone: data.phone,
          country: data.country,
          arrivalDate: data.arrivalDate ? format(data.arrivalDate, "PPP") : "",
          departureDate: data.departureDate ? format(data.departureDate, "PPP") : "",
          numPeople: data.numPeople,
          specialRequests: data.specialRequests,
        }),
      });

      if (response.ok) {
        toast({
          title: "Booking Submitted!",
          description: "We'll contact you shortly to confirm your tour.",
        });
        form.reset();
        setSelectedTour("");
      } else {
        toast({
          variant: "destructive",
          title: "Booking Failed",
          description: "There was a problem submitting your booking. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Booking Failed",
        description: "Network error. Please check your connection and try again.",
      });
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-card p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="tourTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Tour</FormLabel>
                <Select onValueChange={handleTourSelect} value={selectedTour}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a tour" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {tours.map((tour) => (
                      <SelectItem key={tour} value={tour}>
                        {tour}
                      </SelectItem>
                    ))}
                    <SelectItem value="Custom Tour">Custom Tour Request</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+1234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Your country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="arrivalDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Arrival Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0))
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="departureDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Departure Date (optional)</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0))
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="numPeople"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of People</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min={1}
                      placeholder="1" 
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="specialRequests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Special Requests (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about any special requirements or questions you have..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary-light"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Book Now"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

