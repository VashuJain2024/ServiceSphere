import gyserinstall from "../assets/gyser installation.jpg";
import pipeRepair from "../assets/pipe repair.jpg";
import drainCleaning from "../assets/drain cleaning.jpg";
import rewire from "../assets/rewire.jpg";
import deepCleaning from "../assets/deepcleaning.jpg";
import carpetCleaning from "../assets/carpertCleaning.jpg";
import lightInstall from "../assets/lightInstall.jpg";
import electrical from "../assets/electrical repair .jpg";
import gardenDesign from "../assets/gardenDesign.jpg";
import serviceImage2 from "../assets/image2.jpg";
import windowClean from "../assets/window_cleaning.jpg";
import bathroomClean from "../assets/bathroomClean.jpg";
import cleaning from "../assets/cleaning.jpg";
import treeTrim from "../assets/treeTrim.jpg";
import lawnMoving from "../assets/lawnMoving.jpg";
import laundry from "../assets/laundry.jpg";
import Dishwashing from "../assets/Dishwashing.jpg";
import Dusting from "../assets/Dusting.jpg";
import mopping from "../assets/mopping.jpg";
import elderlyCaregivers from "../assets/elderly caregivers.jpg";
import nannies from "../assets/nannies.jpg";
import drivers from "../assets/personal drivers.jpg";
import cooks from "../assets/daily cooks.jpg";
import cookingAssistant from "../assets/cooking assistant.jpg";
import househelpers from "../assets/house helpers.jpg";
import eventhelpers from "../assets/event helpers.jpg";


const homeServices = [
    {
        category: "Plumbing",
        services: [
            {
                title: "Pipe Repair",
                description:
                    "Fixing broken pipes and leaks to prevent water damage and maintain water flow.",
                image: pipeRepair,
            },
            {
                title: "Geyser Installation",
                description:
                    "Installing and repairing water heaters for a continuous hot water supply.",
                image: gyserinstall,
            },
            {
                title: "Drain Cleaning",
                description:
                    "Cleaning blocked drains and ensuring proper water flow in your plumbing system.",
                image: drainCleaning,
            },
           
        ],
    },
    {
        category: "Electrical",
        services: [
            {
                title: "Wiring and Rewiring",
                description:
                    "Installing and upgrading electrical wiring to meet safety standards.",
                image: rewire,
            },
            {
                title: "Lighting Installation",
                description:
                    "Installing indoor and outdoor lighting systems to brighten up your home.",
                image: lightInstall,
            },
            {
                title: "Electrical Repairs",
                description:
                    "Fixing electrical faults to ensure your home is safe and functional.",
                image: electrical,
            },
            {
                title: "Washing Machine Repairs",
                description:
                    "Fixing electrical faults in machine  to ensure your machine is safe and functional.",
                image: serviceImage2,
            },
        ],
    },
    {
        category: "Cleaning",
        services: [
            {
                title: "House Cleaning",
                description:
                    "Comprehensive cleaning services including dusting, vacuuming, and more.",
                image: deepCleaning ,
            },
            {
                title: "Carpet Cleaning",
                description:
                    "Deep cleaning your carpets to remove dirt, stains, and allergens.",
                image: carpetCleaning,
            },
            {
                title: "Window Washing",
                description:
                    "Professional window washing to make your home shine inside and out.",
                image: windowClean,
            },
            {
                title: "Bathroom Cleaning",
                description:
                    "Professional like bathroom cleaning to make your bathroom shine and fresh inside and out.",
                image: bathroomClean,
            },
        ],
    },
    {
        category: "Gardening",
        services: [
            {
                title: "Lawn Mowing",
                description:
                    "Regular lawn mowing services to maintain your yard’s beauty.",
                image: lawnMoving,
            },
            {
                title: "Garden Design",
                description:
                    "Designing and landscaping your garden to fit your style and preferences.",
                image: gardenDesign,
            },
            {
                title: "Tree Trimming",
                description:
                    "Trimming trees to ensure safety, beauty, and health of your plants.",
                image: treeTrim,
            },
            
        ],
    },
    {
        category : "Home Maids",
        services: [
            {
                title: "Deep Cleaning",
                description:"Thorough deep cleaning for a spotless, refreshing home.",
                image: cleaning,
            },
            {
                title: "Dishwashing",
                description: "Cleaning dishes and kitchenware for a sparkling clean kitchen.",
                image: Dishwashing,
            },
            {
                title: "Laundry",
                description: "Cleaning and folding laundry for a fresh, clean home.",
                image: laundry,
            },
            {
                title: "Dusting",
                description: "Dusting and polishing surfaces for a clean and shiny home.",
                image: Dusting,
            },
            {
                title: "Mopping",
                description: "Mopping floors for a clean and hygienic home.",
                image: mopping,
            },
        ],

    },
    {
         category :"Handy Helpers",
         services: [
            {
                title: "Childcare Nannies",
                description: "Trusted childcare nannies for a safe and happy child.",
                image: nannies,
            },
            {
                title : "Elderly Caregivers" , 
                description: "Compassionate elderly caregivers for a happy and healthy senior.",
                image: elderlyCaregivers,
                },
            {
                title: "Personal Drivers",
                description: "Reliable personal drivers for a safe and convenient ride.",
                image: drivers,
            },
            {
                title:"Daily Cooks" , 
                description: "Delicious daily meals prepared by a trusted cook.",
                image: cooks,
            },
            {
                title: "Cooking Assistants",
                description: "Help with meal preparation and cooking for a stress-free kitchen.",
                image: cookingAssistant,
            },
        ],

    },
    {
        category: "Event and Party Supports",
        services: [ 
            {
                title: "House party Helpers",
                description: "Help with party setup, cleanup , serving , and more for a stress-free celebration.",
                image : househelpers ,
            },
            {
                title: " Event Helpers ",
                description: "Help with event setup, decoration , guest management and more for a stress-free celebration .",
                image: eventhelpers,

            },
        ],
    },
];

export default homeServices;