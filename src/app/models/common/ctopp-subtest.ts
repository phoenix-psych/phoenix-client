export class CTOPPSubTest {
    public id: string;
    public subTest: string;
    public rawScore?: number;
    public ageEq?: number;
    public gradeEq?: number;
    public percentageRank?: string;
    public scaleScore?: number;
    public stanScore?: number;
    public description?: string;
  
    constructor(id: string,
                  subTest: string,
                  rawScore?: number,
                  ageEq?: number,
                  gradeEq?: number,
                  percentageRank?: string,
                  scaleScore?: number,
                  stanScore?: number,
                  description?: string) 
    {
      this.id = id;
      this.subTest = subTest;
      this.rawScore = rawScore;
      this.ageEq = ageEq;
      this.gradeEq= gradeEq;
      this.percentageRank= percentageRank;
      this.scaleScore= scaleScore;
      this.stanScore= stanScore;
      this.description= description;
    }
  }