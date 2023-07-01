export enum SelectedPage {
    Home = "home",
    About = "about",
    Documentation = "documentation",
    ContactUs = "contactus"
  }
  
  export interface DocumentationType {
    icon: JSX.Element;
    title: string;
    description: string;
  }