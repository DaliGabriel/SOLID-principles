import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import OpenClosedPrinciple from "./OpenClosedPrinciple";
// import LiskovSubstitutionPrinciple from "./LiskovSubstitutionPrinciple";
// import InterfaceSegregationPrinciple from "./InterfaceSegregationPrinciple";
// import DependencyInversionPrinciple from "./DependencyInversionPrinciple";
// import SingleResponsibilityPrinciple from "./SingleResponsibilityPrinciple";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>SOLID principles</h1>
    <p>**Uncomment the imports and components**</p>
    {/* <SingleResponsibilityPrinciple /> */}
    {/* <OpenClosedPrinciple /> */}
    {/* <LiskovSubstitutionPrinciple /> */}
    {/* <InterfaceSegregationPrinciple /> */}
    {/* <DependencyInversionPrinciple /> */}
  </StrictMode>
);
