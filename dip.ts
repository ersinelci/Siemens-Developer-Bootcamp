//Dependency Inversion Principle

// Bu örnekte Frontend ve Backend Developer'ın methodlarını bir interface aracılığı ile ayırdık. Bu sayede class'ların birbiriyle olan yakınlığını azalttık.
// Aralarındaki ilişkiyi yüksek seviyeden kurduk. 
interface Developer {
    develop(): void;
  }
  
  class FrontendDeveloper implements Developer {
    public develop(): void {
      this.writeTypescriptCode();
    }
  
    private writeTypescriptCode(): void {
     
    }
  }
  
  class BackendDeveloper implements Developer {
    public develop(): void {
      this.writeJavaCode();
    }
  
    private writeJavaCode(): void {
      
    }
  }
  
  class SoftwareProject {
    public developers: Developer[];
  
    public createProject(): void {
      this.developers.forEach((developer: Developer) => {
        developer.develop();
      });
    }
  }