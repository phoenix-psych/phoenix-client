import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientDto } from 'src/app/models/common/client.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.scss']
})
export class Report1Component implements OnInit {

  isEdit = false;
  editText = 'Edit'
  myDate = new Date();
  today : string | null;
  dobStr : string | null;
  age : number = 0;

  @ViewChild('invoice') invoiceElement!: ElementRef;


  constructor(public dialogRef: MatDialogRef<Report1Component>,
    @Inject(MAT_DIALOG_DATA) public data: ClientDto,
    private datePipe: DatePipe) 
    {
      this.today = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
      this.dobStr = this.datePipe.transform(data.dob, 'yyyy-MM-dd');
    }

  ngOnInit(): void {
    this.getAge();
  }

  public generatePDF(): void {
    
    this.generatePDF5();
  }

  OnEdit() {
    this.isEdit = !this.isEdit
    if(this.isEdit)
    {
      this.editText = 'Stop Editing'
    }
    else
    {
      this.editText = 'Edit'
    }

  }
    

  getAge() {
    this.age = this.calculateAge(this.data.dob);
  }

  calculateAge(birthDate: Date): number {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  }

  generatePDF3(){
    const data = this.invoiceElement.nativeElement;
    html2canvas(data).then((canvas:any) => {

      const doc = new jsPDF('p', 'mm', 'a4');

      // const imgWidth = 208;
      // const pageHeight = 295;

      const imgWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      const imgHeight = Math.ceil((canvas.height * imgWidth) / canvas.width);
      console.log(`imgHeight - ${imgHeight}`);
      let heightLeft = imgHeight;
      let position = 0;
      let pageNo = 0;
      heightLeft -= pageHeight;
      doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
        heightLeft -= pageHeight;
      }
      doc.save(`Report:${this.data.name}(${this.data.email}).pdf`);
    });
  }

  generatePDF5() {
    const pages = document.querySelectorAll('.page');
    const pdf = new jsPDF('p', 'mm', 'a4');
  
    function generatePage(index:number) {
      if (index < pages.length) {
        const page = pages[index] as HTMLElement;
  
        // Use html2canvas to capture the HTML content as an image
        html2canvas(page).then(canvas => {
          const imageData = canvas.toDataURL('image/png');
  
          // Add a new page to the PDF
          if (index > 0) {
            pdf.addPage();
          }
  
          // Add the captured image to the PDF
          pdf.addImage(imageData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
  
          // Move to the next page
          generatePage(index + 1);
        });
      } else {
        // Save or display the PDF
        pdf.save('page-wise-pdf.pdf');
      }
    }
  
    // Start generating PDF from the first page
    generatePage(0);
  }

  selectedSPLDDesc = '';
  updatedTextSPLDDesc = '';
  dropdownSPLDDesc: Array<any> = [
    { Name:"Choose an item.",Value:" " },
    { Name:"displays characteristics of Dyslexia.",Value:"displays characteristics of Dyslexia."},
    { Name:"displays charateristics of Dyslexia, and the combined presentation of ADHD symptoms.",Value:"displays charateristics of Dyslexia, and the combined presentation of ADHD symptoms."},
    { Name:"displays charateristics associated with Dyslexia and the presentaion of ADHD inattentive characteristics.",Value:"displays charateristics associated with Dyslexia and the presentaion of ADHD inattentive characteristics."},
    { Name:"displays charateristics of Dyslexia, Developmental Coordination Disorder (DCD) and ADHD inattentive characteristics.",Value:"displays charateristics of Dyslexia, Developmental Coordination Disorder (DCD) and ADHD inattentive characteristics."},
    { Name:"displays charateristics of Dyslexia, Developmental Coordination Disorder (DCD) and combined presentation of ADHD characteristics.",Value:"displays charateristics of Dyslexia, Developmental Coordination Disorder (DCD) and combined presentation of ADHD characteristics."},
    { Name:"displays characteristics associated with Developmental Coordination Disorder (DCD) and ADHD combined presentation of symptoms.",Value:"displays characteristics associated with Developmental Coordination Disorder (DCD) and ADHD combined presentation of symptoms."},
    { Name:"displays characteristics associated with Developmental Coordination Disorder (DCD) and ADHD inattentive presentation of symptoms.",Value:"displays characteristics associated with Developmental Coordination Disorder (DCD) and ADHD inattentive presentation of symptoms."},
    { Name:"displays characteristics associated with Dyslexia and difficulites around social and communication skills. ",Value:"displays characteristics associated with Dyslexia and difficulites around social and communication skills. "},
    { Name:"displays difficulites with Developmental Coordination Disorder (DCD), social and communication difficulities.",Value:"displays difficulites with Developmental Coordination Disorder (DCD), social and communication difficulities."},
    { Name:"displays a combined presentation of a combined presentation of ADHD symptoms, social and communication skill's difficulites.",Value:"displays a combined presentation of a combined presentation of ADHD symptoms, social and communication skill's difficulites."},
    { Name:"displays the presentation of ADHD inattentive symptoms, social and communication skill's difficulites.",Value:"displays the presentation of ADHD inattentive symptoms, social and communication skill's difficulites."},
    { Name:"displays characteristics associated with Dyslexia, Developmental Coordination Disorder (DCD), ADHD inattentive, soical and communication skill's difficulites.",Value:"displays characteristics associated with Dyslexia, Developmental Coordination Disorder (DCD), ADHD inattentive, soical and communication skill's difficulites."},
    { Name:"displays charateristics associated with Dyslexia, Developmental Coordination Disorder (DCD), ADHD combined presentation of symptoms, social and communication skill's difficulites.",Value:"displays charateristics associated with Dyslexia, Developmental Coordination Disorder (DCD), ADHD combined presentation of symptoms, social and communication skill's difficulites."},
    { Name:"displays difficulties characteristic of a specific learning difference related to the speed of processing information.",Value:"displays difficulties characteristic of a specific learning difference related to the speed of processing information."},
    { Name:"displays characteristics of Developmental Coordination Disorder (DCD.",Value:"displays characteristics of Developmental Coordination Disorder (DCD."},
    { Name:"displays the combined characteristics of ADHD.",Value:"displays the combined characteristics of ADHD."},
    { Name:"displays characteristics in the inattentive symptoms of ADHD.",Value:"displays characteristics in the inattentive symptoms of ADHD."},
  ];

  onDropdownChangeSPLDDesc(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedSPLDDesc = selectedValue;
    this.updatedTextSPLDDesc = selectedValue;
  }

  selectedOptionSPLDSDesc = '';
  updatedTextSPLDSDesc = '';
  dropdownOptionsSPLDSDesc: Array<any> = [
    { Name:"Choose an item.",Value:" " },
    { Name:"Dyslexia ",Value:"Dyslexia" },
    { Name:"ADHD ",Value:"ADHD" },
    { Name:"Developmental Coordination Disorder (DCD) ",Value:"Developmental Coordination Disorder (DCD)" },
    { Name:"Specific Learning Difference - Speed of Processing ",Value:"Specific Learning Difference - Speed of Processing" },
    { Name:"Dyslexia, ADHD ",Value:"Dyslexia, ADHD" },
    { Name:"Dyslexia, Developmental Coordination Disorder ",Value:"Dyslexia, Developmental Coordination Disorder" },
    { Name:"ADHD and Developmental Coordination Disorder (DCD)",Value:"ADHD and Developmental Coordination Disorder (DCD)"},
    { Name:"ADHD, Dyslexia and Developental Coordination Disorder ",Value:"ADHD, Dyslexia and Developental Coordination Disorder" },
  ];

  onDropdownChangeSPLDSDesc(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionSPLDSDesc = selectedValue;
    this.updatedTextSPLDSDesc = selectedValue;
  }

  
  selectedOptionSPLDMental = '';
  updatedTextSPLDMental = '';
  dropdownOptionsSPLDMental: Array<any> = [
    { Name:"Choose an item.",Value:" " },
    { Name:"Dyslexia",Value:"Dyslexia" },
    { Name:"Developmental Coordination Disorder (DCD)",Value:"Developmental Coordination Disorder (DCD)" },
    { Name:"ADHD",Value:"ADHD" },
    { Name:"Mental Health difficulites",Value:"Mental Health difficulites" },
    { Name:"Social and communication difficulites",Value:"Social and communication difficulites" },
    { Name:"Dyscalculia",Value:"Dyscalculia" },
  ];

  onDropdownChangeSPLDMental(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionSPLDMental = selectedValue;
    this.updatedTextSPLDMental = selectedValue;
  }

  selectedOptionOnWaitingList = '';
  updatedTextOnWaitingList = '';
  dropdownOptionsOnWaitingList: Array<any> = [
    { Name:"Choose an item.",Value:" " },
    { Name:"receiving support for their mental health difficulites through the Mental Health services within the NHS.",Value:"receiving support for their mental health difficulites through the Mental Health services within the NHS." },
    { Name:"receiving support for their mental health difficulites through their University's wellbeing service.",Value:"receiving support for their mental health difficulites through their University's wellbeing service." },
    { Name:"receiving support for their mental health difficulites privately with a mental helath professional.",Value:"receiving support for their mental health difficulites privately with a mental helath professional." },
    { Name:"currently on a waiting list to further explore ADHD symptoms.",Value:"currently on a waiting list to further explore ADHD symptoms." },
    { Name:"currently on a waiting list to further explore Social &amp; Communication presentations.",Value:"currently on a waiting list to further explore Social &amp; Communication presentations." },
    { Name:"currently in the process of being assessed by a medicla professional for Social &amp; Communication difficulties.",Value:"currently in the process of being assessed by a medicla professional for Social &amp; Communication difficulties." },
  ];

  onDropdownChangeOnWaitingList(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionOnWaitingList = selectedValue;
    this.updatedTextOnWaitingList = selectedValue;
  }

  
  selectedOptionCondition = '';
  updatedTextCondition = '';
  dropdownOptionsCondition: Array<any> = [
    { Name:"Choose an item.",Value:" " },
    { Name:"ADHD symptoms",Value:"ADHD symptoms" },
    { Name:"Social &amp; Communication symptoms",Value:"Social &amp; Communication symptoms" },
    { Name:"Mental Health wellbeing",Value:"Mental Health wellbeing" },
    { Name:"ADHD symptoms, Social &amp; Communication symptoms and a mental health wellbeing.",Value:"ADHD symptoms, Social &amp; Communication symptoms and a mental health wellbeing." },
    { Name:"ADHD symptoms and Mental Health wellbeing ",Value:"ADHD symptoms and Mental Health wellbeing " },
  ];

  onDropdownChangeCondition(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionCondition = selectedValue;
    this.updatedTextCondition = selectedValue;
  }


  
  selectedOptionSPLDOutcome = '';
  updatedTextSPLDOutcome = '';
  dropdownOptionsSPLDOutcome: Array<any> = [
    { Name:"Choose an item.",Value:" " },
    { Name:"Dyslexia,",Value:"Dyslexia," },
    { Name:"DCD,",Value:"DCD," },
    { Name:"ADHD inattentive symptoms,",Value:"ADHD inattentive symptoms," },
    { Name:"ADHD combined symptoms, ",Value:"ADHD combined symptoms, " },
    { Name:"Dyslexia and DCD, ",Value:"Dyslexia and DCD, " },
    { Name:"Dyslexia and ADHD inattentive symptoms, ",Value:"Dyslexia and ADHD inattentive symptoms, " },
    { Name:"ADHD inattentive symptoms and DCD, ",Value:"ADHD inattentive symptoms and DCD, " },
    { Name:"ADHD combined symptoms and DCD, ",Value:"ADHD combined symptoms and DCD, " },
    { Name:"ADHD inattentive symptoms, Dyslexia and DCD, ",Value:"ADHD inattentive symptoms, Dyslexia and DCD, " },
    { Name:"ADHD combined symptomms, Dsylexia and DCD, ",Value:"ADHD combined symptomms, Dsylexia and DCD, " },
  ];

  onDropdownChangeSPLDOutcome(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionSPLDOutcome = selectedValue;
    this.updatedTextSPLDOutcome = selectedValue;
  }
  selectedOptionMemory = '';
  updatedTextMemory = '';
  dropdownOptionsMemory: Array<any> = [
    { Name:"Choose an item.",Value:" " },
    { Name:"weak verbal short-term memory (ability to retain rote information);",Value:"weak verbal short-term memory (ability to retain rote information);" },
    { Name:"weak working memory (ability to retain and manipulate information simultaneously); ",Value:"weak working memory (ability to retain and manipulate information simultaneously); " },
    { Name:"weak verbal short-term and working memory (ability to retain and manipulate information simultaneously);",Value:"weak verbal short-term and working memory (ability to retain and manipulate information simultaneously);" },
  ];

  onDropdownChangeMemory(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionMemory = selectedValue;
    this.updatedTextMemory = selectedValue;
  }

  selectedOptionMemoryPP = '';
  updatedTextMemoryPP = '';
  dropdownOptionsMemoryPP: Array<any> = [
    { Name:"Choose an item.",Value:" " },
    { Name:"difficulty with phonological processing (the ability to manipulate the sound structure of language) as well as slower speeds of processing when recalling information.",Value:"difficulty with phonological processing (the ability to manipulate the sound structure of language) as well as slower speeds of processing when recalling information." },
    { Name:"difficulty with phonological awareness (the ability to manipulate the sound structure of language),",Value:"difficulty with phonological awareness (the ability to manipulate the sound structure of language)," },
    { Name:"difficulty with phonological memory (the ability to recall the sound structure of language),",Value:"difficulty with phonological memory (the ability to recall the sound structure of language)," },
    { Name:"difficulty with the symbolic rapid naming (recalling and naming number and language-based information at speed), ",Value:"difficulty with the symbolic rapid naming (recalling and naming number and language-based information at speed), " },
    { Name:"difficulty with phonological awareness (the ability to manipulate the sound structrue of language) and phonological memory (the ability to retain and recall the sound structure of language) ",Value:"difficulty with phonological awareness (the ability to manipulate the sound structrue of language) and phonological memory (the ability to retain and recall the sound structure of language) " },
    { Name:"phonological memory (the ability to retain and recall the sound structure of language) and the rapid symbolic naming of over learnt information (naming number and language based information at speed),",Value:"phonological memory (the ability to retain and recall the sound structure of language) and the rapid symbolic naming of over learnt information (naming number and language based information at speed)," },
    { Name:"difficulty with phonological awareness (the ability to manipulate the sound structure of language) and the rapid symbolic naming of overlearnt information (naming number and language-based information at speed)",Value:"difficulty with phonological awareness (the ability to manipulate the sound structure of language) and the rapid symbolic naming of overlearnt information (naming number and language-based information at speed)" },
  ];

  onDropdownChangeMemoryPP(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionMemoryPP = selectedValue;
    this.updatedTextMemoryPP = selectedValue;
  }

  selectedOptionNumbers = '';
  updatedTextNumbers = '';
  dropdownOptionsNumbers: Array<any> = [
    { Name:"Choose an item.",Value:" " },
    { Name:"one",Value:"one" },
    { Name:"two",Value:"two" },
    { Name:"three",Value:"three" },
    { Name:"four",Value:"four" },
    { Name:"five",Value:"five" },
    { Name:"six",Value:"six" },
    { Name:"seven",Value:"seven" },
    { Name:"eight",Value:"eight" },
    { Name:"nine",Value:"nine" },
  ];

  onDropdownChangeNumbers(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionNumbers = selectedValue;
    this.updatedTextNumbers = selectedValue;
  }

  selectedOptionNumber2 = '';
  updatedTextNumber2 = '';
  onDropdownChangeNumber2(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionNumber2 = selectedValue;
    this.updatedTextNumber2 = selectedValue;
  }

  selectedOptionADHD = '';
  updatedTextADHD = '';
  dropdownOptionsADHD: Array<any> = [
    { Name:"Choose an item.",Value:" " },
    { Name:"ADHD inattentive presentation.",Value:"ADHD inattentive presentation." },
    { Name:"ADHD combined presentation.",Value:"ADHD combined presentation." },
  ];

  onDropdownChangeADHD(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionADHD = selectedValue;
    this.updatedTextADHD = selectedValue;
  }

  selectedOptionRangeCategory = '';
  updatedTextRangeCategory = '';
  dropdownOptionsRangeCategory: Array<any> = [
    { Name:"Choose an item.",Value:" " },
    { Name:"very low range",Value:"very low range" },
    { Name:"low range",Value:"low range" },
    { Name:"below-average range",Value:"below-average range" },
    { Name:"low-average range",Value:"low-average range" },
    { Name:"mid-average range",Value:"mid-average range" },
    { Name:"high-average range",Value:"high-average range" },
    { Name:"above-average range",Value:"above-average range" },
    { Name:"high range",Value:"high range" },
    { Name:"very high range",Value:"very high range" },
  ];

  onDropdownChangeRangeCategory(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionRangeCategory = selectedValue;
    this.updatedTextRangeCategory = selectedValue;
  }


  selectedOptionWordFinding = '';
  updatedTextWordFinding = '';
  dropdownOptionsWordFinding: Array<any> = [
    { Name:"Choose an item.",Value:" " },
    { Name:"both verbally and when writing.",Value:"both verbally and when writing." },
    { Name:"when writing.",Value:"when writing." },
    { Name:"when verbalising their thoughts.",Value:"when verbalising their thoughts." },
  ];

  onDropdownChangeWordFinding(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionWordFinding = selectedValue;
    this.updatedTextWordFinding = selectedValue;
  }

  
  selectedOptionRange2 = '';
  updatedTextRange2 = '';
  onDropdownChangeRange2(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionRange2 = selectedValue;
    this.updatedTextRange2 = selectedValue;
  }

  selectedOptionStdScore = '';
  updatedTextStdScore = '';
  dropdownOptionsStdScore: Array<any> = [
    { Name:"Choose an item.",Value:" " },
    { Name:"1",Value:"1" },
    { Name:"2",Value:"2" },
    { Name:"3",Value:"3" },
    { Name:"4",Value:"4" },
    { Name:"5",Value:"5" },
    { Name:"6",Value:"6" },
    { Name:"7",Value:"7" },
    { Name:"8",Value:"8" },
    { Name:"9",Value:"9" },
    { Name:"10",Value:"10" },
    { Name:"11",Value:"11" },
    { Name:"12",Value:"12" },
    { Name:"13",Value:"13" },
    { Name:"14",Value:"14" },
    { Name:"15",Value:"15" },
    { Name:"16",Value:"16" },
    { Name:"17",Value:"17" },
    { Name:"18",Value:"18" },
    { Name:"19",Value:"19" },
    { Name:"20",Value:"20" },
    { Name:"21",Value:"21" },
    { Name:"22",Value:"22" },
    { Name:"23",Value:"23" },
    { Name:"24",Value:"24" },
    { Name:"25",Value:"25" },
    { Name:"26",Value:"26" },
    { Name:"27",Value:"27" },
    { Name:"28",Value:"28" },
    { Name:"29",Value:"29" },
    { Name:"30",Value:"30" },
    { Name:"31",Value:"31" },
    { Name:"32",Value:"32" },
    { Name:"33",Value:"33" },
    { Name:"34",Value:"34" },
    { Name:"35",Value:"35" },
    { Name:"36",Value:"36" },
    { Name:"37",Value:"37" },
    { Name:"38",Value:"38" },
    { Name:"39",Value:"39" },
    { Name:"40",Value:"40" },
    { Name:"41",Value:"41" },
    { Name:"42",Value:"42" },
    { Name:"43",Value:"43" },
    { Name:"44",Value:"44" },
    { Name:"45",Value:"45" },
    { Name:"46",Value:"46" },
    { Name:"47",Value:"47" },
    { Name:"48",Value:"48" },
    { Name:"49",Value:"49" },
    { Name:"50",Value:"50" },
    { Name:"51",Value:"51" },
    { Name:"52",Value:"52" },
    { Name:"53",Value:"53" },
    { Name:"54",Value:"54" },
    { Name:"55",Value:"55" },
    { Name:"56",Value:"56" },
    { Name:"57",Value:"57" },
    { Name:"58",Value:"58" },
    { Name:"59",Value:"59" },
    { Name:"60",Value:"60" },
    { Name:"61",Value:"61" },
    { Name:"62",Value:"62" },
    { Name:"63",Value:"63" },
    { Name:"64",Value:"64" },
    { Name:"65",Value:"65" },
    { Name:"66",Value:"66" },
    { Name:"67",Value:"67" },
    { Name:"68",Value:"68" },
    { Name:"69",Value:"69" },
    { Name:"70",Value:"70" },
    { Name:"71",Value:"71" },
    { Name:"72",Value:"72" },
    { Name:"73",Value:"73" },
    { Name:"74",Value:"74" },
    { Name:"75",Value:"75" },
    { Name:"76",Value:"76" },
    { Name:"77",Value:"77" },
    { Name:"78",Value:"78" },
    { Name:"79",Value:"79" },
    { Name:"80",Value:"80" },
    { Name:"81",Value:"81" },
    { Name:"82",Value:"82" },
    { Name:"83",Value:"83" },
    { Name:"84",Value:"84" },
    { Name:"85",Value:"85" },
    { Name:"86",Value:"86" },
    { Name:"87",Value:"87" },
    { Name:"88",Value:"88" },
    { Name:"89",Value:"89" },
    { Name:"90",Value:"90" },
    { Name:"91",Value:"91" },
    { Name:"92",Value:"92" },
    { Name:"93",Value:"93" },
    { Name:"94",Value:"94" },
    { Name:"95",Value:"95" },
    { Name:"96",Value:"96" },
    { Name:"97",Value:"97" },
    { Name:"98",Value:"98" },
    { Name:"99",Value:"99" },
    { Name:"100",Value:"100" },
    { Name:"101",Value:"101" },
    { Name:"102",Value:"102" },
    { Name:"103",Value:"103" },
    { Name:"104",Value:"104" },
    { Name:"105",Value:"105" },
    { Name:"106",Value:"106" },
    { Name:"107",Value:"107" },
    { Name:"108",Value:"108" },
    { Name:"109",Value:"109" },
    { Name:"110",Value:"110" },
    { Name:"111",Value:"111" },
    { Name:"112",Value:"112" },
    { Name:"113",Value:"113" },
    { Name:"114",Value:"114" },
    { Name:"115",Value:"115" },
    { Name:"116",Value:"116" },
    { Name:"117",Value:"117" },
    { Name:"118",Value:"118" },
    { Name:"119",Value:"119" },
    { Name:"120",Value:"120" },
    { Name:"121",Value:"121" },
    { Name:"122",Value:"122" },
    { Name:"123",Value:"123" },
    { Name:"124",Value:"124" },
    { Name:"125",Value:"125" },
    { Name:"126",Value:"126" },
    { Name:"127",Value:"127" },
    { Name:"128",Value:"128" },
    { Name:"129",Value:"129" },
    { Name:"130",Value:"130" },
    { Name:"131",Value:"131" },
    { Name:"132",Value:"132" },
    { Name:"133",Value:"133" },
    { Name:"134",Value:"134" },
    { Name:"135",Value:"135" },
    { Name:"136",Value:"136" },
    { Name:"137",Value:"137" },
    { Name:"138",Value:"138" },
    { Name:"139",Value:"139" },
    { Name:"140",Value:"140" },
    { Name:"141",Value:"141" },
    { Name:"142",Value:"142" },
    { Name:"143",Value:"143" },
    { Name:"145",Value:"145" },
    { Name:"146",Value:"146" },
    { Name:"147",Value:"147" },
    { Name:"148",Value:"148" },
    { Name:"149",Value:"149" },
    { Name:"150",Value:"150" },
    { Name:"151",Value:"151" },
    { Name:"152",Value:"152" },
    { Name:"153",Value:"153" },
    { Name:"154",Value:"154" },
    { Name:"156",Value:"156" },
    { Name:"157",Value:"157" },
    { Name:"158",Value:"158" },
    { Name:"159",Value:"159" },
    { Name:"160",Value:"160" },

  ];

  onDropdownChangeStdScore(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionStdScore = selectedValue;
    this.updatedTextStdScore = selectedValue;
  }


  // selectedOption00 = '';
  // updatedText00 = '';
  // dropdownOptions00: Array<any> = [
  //   { Name:"00",Value:"00"},
  // ];

  // onDropdownChange00(event: Event) {
  //   const selectedValue = (event.target as HTMLSelectElement).value;
  //   this.selectedOption00 = selectedValue;
  //   this.updatedText00 = selectedValue;
  // }

  // selectedOption00 = '';
  // updatedText00 = '';
  // dropdownOptions00: Array<any> = [
  //   { Name:"00",Value:"00"},
  // ];

  // onDropdownChange00(event: Event) {
  //   const selectedValue = (event.target as HTMLSelectElement).value;
  //   this.selectedOption00 = selectedValue;
  //   this.updatedText00 = selectedValue;
  // }
}

