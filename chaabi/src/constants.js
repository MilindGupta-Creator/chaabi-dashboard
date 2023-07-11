import Trainings from "./assets/trainings.png";
import Dashboard from "./assets/Category.svg";
import Location from "./assets/Location.png";
import TicketStar from "./assets//Ticket Star.png";
import GreenTrendIcon from "./assets/Frame 39.png";
import RedTrendIcon from "./assets/Frame 40.png";
import GreenChart from "./assets/Chart.svg";
import RedChart from "./assets/Chart1.png";
export const navbarSections = [
  {
    name: "Dashboard",
    icon: Dashboard,
    isActive: true,
  },
  {
    name: "Trainings",
    icon: Trainings,
    isActive: false,
  },
  {
    name: "Users",
    icon: TicketStar,
    isActive: false,
  },
  {
    name: "Analytics",
    icon: Location,
    isActive: false,
  },
  {
    name: "My account",
    icon: Location,
    isActive: false,
  },
  {
    name: "Support",
    icon: Location,
    isActive: false,
  },
];

export const userStatsArray = [
  {
    title: "In Training Workers",
    time: "3,354",
    trendUpPercentage: GreenTrendIcon,
    chart: GreenChart,
    trendUpInNumbers: 234,
  },
  {
    title: "Video Watch-Time (Hrs)",
    time: "2,433",
    trendUpPercentage: RedTrendIcon,
    trendUpInNumbers: 435,
    chart: RedChart,
  },
  {
    title: "% Workers Passing Quiz",
    time: "95%",
    trendUpPercentage: GreenTrendIcon,
    trendUpInNumbers: "24%",
    chart: GreenChart,
  },
  {
    title: "Avg. Days Taken",
    time: 6,
    trendUpPercentage: GreenTrendIcon,
    trendUpInNumbers: 3,
    chart: GreenChart,
  },
];

export const chapterwiseStatusList = [
  {
    value: "Finished Training",
    bulletColor: "#0D62FF",
  },
  {
    value: "Chapter A",
    bulletColor: "#3333334D",
  },
  {
    value: "Chapter B",
    bulletColor: "#8400D5",
  },
  {
    value: "Chapter C",
    bulletColor: "#425F57",
  },
  {
    value: "Haven'\t Started Yet",
    bulletColor: "#ED1C24",
  },
];

export const courseList = [
  {
    name: "course a",
    description: "23 Workers Took This Course This Week",
  },
  {
    name: "course b",
    description: "253 Workers Took This Course This Week",
  },
  {
    name: "course c",
    description: "230 Workers Took This Course This Week",
  },
  {
    name: "course d",
    description: "23 Workers Took This Course This Week",
  },
];
