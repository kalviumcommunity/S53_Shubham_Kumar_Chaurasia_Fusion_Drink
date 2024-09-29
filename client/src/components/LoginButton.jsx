// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Navbar } from "@/components/ui/navbar";
// import { Skeleton } from "@/components/ui/skeleton";
// import { AlertCircle } from "lucide-react";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// // Define types based on the provided schema
// interface Cocktail {
//   id: number;
//   name: string;
//   image: string;
// }

// interface AlcoholType {
//   id: number;
//   name: string;
//   image: string;
// }

// interface DashboardData {
//   randomCocktails: Cocktail[];
//   alcoholTypes: AlcoholType[];
// }

// // Function to fetch dashboard data
// const fetchDashboardData = async (): Promise<DashboardData> => {
//   const response = await axios.get<DashboardData>("/api/dashboard");
//   return response.data;
// };

// export default function DashboardPage() {
//   const { data, isLoading, isError } = useQuery<DashboardData, Error>({
//     queryKey: ["dashboardData"],
//     queryFn: fetchDashboardData,
//   });

//   if (isLoading) {
//     return <LoadingSkeleton />;
//   }

//   if (isError) {
//     return (
//       <Alert variant="destructive">
//         <AlertCircle className="h-4 w-4" />
//         <AlertTitle>Error</AlertTitle>
//         <AlertDescription>
//           Failed to load dashboard data. Please try again later.
//         </AlertDescription>
//       </Alert>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
//       <Navbar />
//       <main className="container mx-auto px-4 py-8">
//         <section className="mb-16">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex flex-col md:flex-row items-center justify-between"
//           >
//             <div className="md:w-1/2 mb-8 md:mb-0">
//               <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
//                 The best TASTE <br />comes after MIXING
//               </h1>
//               <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
//                 Explore Cocktails
//               </Button>
//             </div>
//             <div className="md:w-1/2">
//               <Image 
//                 src="/assets/martiniGlass.png" 
//                 alt="Martini Glass" 
//                 width={400} 
//                 height={400} 
//                 className="w-full h-auto max-w-md mx-auto"
//               />
//             </div>
//           </motion.div>
//         </section>

//         <section className="mb-16">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-6">Random Cocktails</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {data?.randomCocktails.map((cocktail) => (
//               <motion.div 
//                 key={cocktail.id}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Link href={`/recipepage/${cocktail.id}`} passHref>
//                   <Card className="overflow-hidden cursor-pointer">
//                     <CardContent className="p-0">
//                       <Image 
//                         src={cocktail.image} 
//                         alt={cocktail.name} 
//                         width={300} 
//                         height={200} 
//                         className="w-full h-48 object-cover"
//                       />
//                       <div className="p-4">
//                         <h3 className="text-lg font-semibold text-gray-800">{cocktail.name}</h3>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         <section>
//           <h2 className="text-3xl font-semibold text-gray-800 mb-6">Alcohol Types</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//             {data?.alcoholTypes.map((alcohol, index) => (
//               <motion.div
//                 key={alcohol.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <Card className="overflow-hidden h-full">
//                   <CardContent className="p-4 flex flex-col items-center">
//                     <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
//                       <Image 
//                         src={alcohol.image} 
//                         alt={alcohol.name} 
//                         width={100} 
//                         height={100} 
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <h3 className="text-lg font-semibold text-gray-800">{alcohol.name}</h3>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// function LoadingSkeleton() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
//       <Navbar />
//       <main className="container mx-auto px-4 py-8">
//         <section className="mb-16">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="md:w-1/2 mb-8 md:mb-0">
//               <Skeleton className="h-16 w-3/4 mb-4" />
//               <Skeleton className="h-12 w-40" />
//             </div>
//             <div className="md:w-1/2">
//               <Skeleton className="w-full h-[400px] max-w-md mx-auto" />
//             </div>
//           </div>
//         </section>

//         <section className="mb-16">
//           <Skeleton className="h-10 w-64 mb-6" />
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[1, 2, 3, 4].map((index) => (
//               <Skeleton key={index} className="h-48 w-full" />
//             ))}
//           </div>
//         </section>

//         <section>
//           <Skeleton className="h-10 w-64 mb-6" />
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//             {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
//               <Skeleton key={index} className="h-40 w-full" />
//             ))}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }


import React from "react";
import { useAuth } from "@clerk/clerk-react";

const LoginButton = () => {
  const { isSignedIn, signIn, signOut } = useAuth();

  const handleAuth = () => {
    if (isSignedIn) {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <button
      onClick={handleAuth}
      className={`px-4 py-2 rounded-md font-semibold text-white transition-colors ${
        isSignedIn
          ? "bg-red-600 hover:bg-red-700"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {isSignedIn ? "Log Out" : "Log In"}
    </button>
  );
};

export default LoginButton;

