import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientDto } from 'src/app/models/common/client.model';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const html2pdf = require('html2pdf.js');
import { asBlob } from 'html-docx-js-typescript';
import { saveAs } from 'file-saver';

interface ClientTestsDto 
{
  clientId : string,

  writva : string,
  writvc : string,
  writvb : string,
  writmat : string,

  tomaL2DF : string,
  tomaL2LF : string,
  tomaL2DB : string,
  tomaL2LB : string,
  tomaL2ACI : string,

  ctopP2MD : string,
  ctopP2NWR : string,
  ctopP2PM : string,
  ctopP2EL : string,
  ctopP2BW : string,
  ctopP2PI : string,
  ctopP2PAC : string,
  ctopP2RDN : string,
  ctopP2RLN : string,
  ctopP2RSN : string,

  wraT5WR : string,
  wraT5SP : string,

  towrE2SWE : string,
  towrE2PDE : string,
  towrE2IND : string,

  arT2SC : string,
  arT2RA : string,
  arT2SR : string,

  handWriting : string,
  typing : string,

}

@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.scss']
})
export class Report1Component implements OnInit {

  private baseUrl:string = environment.baseApiUrl;
  isEdit = false;
  editText = 'Edit'
  myDate = new Date();
  today : string | null;
  dobStr : string | null;
  age : number = 0;
  clientId : string = '';

  art2Chart = '';
  art2ChartVal = '';

  towre2Chart = '';
  towre2ChartVal = '';

  wrat5SChart = '';
  wrat5SChartVal = '';

  wrat5RChart = '';
  wrat5RChartVal = '';

  ctopp2RSNChart = '';
  ctopp2RSNChartVal = '';

  ctopp2PAChart = '';
  ctopp2PAChartVal = '';

  ctopp2PMChart = '';
  ctopp2PMChartVal = '';

  wMChart = '';
  wMChartVal = '';

  nVRChart = '';
  nVRChartVal = '';

  vRVChart = '';
  vRVChartVal = '';

  vRVAChart = '';
  vRVAChartVal = '';

  @ViewChild('invoice') invoiceElement!: ElementRef;

  constructor(public dialogRef: MatDialogRef<Report1Component>,
    @Inject(MAT_DIALOG_DATA) public data: ClientDto,
    private datePipe: DatePipe, private http: HttpClient) 
    {
      this.today = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
      this.dobStr = this.datePipe.transform(data.dob, 'yyyy-MM-dd');
    }

  ngOnInit(): void {
    this.LoadClientTests(this.data.id);
    this.getAge();
  }

  LoadClientTests(id: string) {
    this.LoadClient(id);
  }

  LoadClient(clientId : string)
  {
    this.http.get<ClientTestsDto>(this.baseUrl + 'client/tests/'+ clientId + '', 
    this.setHeader()).subscribe({
      next: (x) =>{
        
        // WRITVA
        if(x.writva != '')
        {
          this.WRITVA69 = ' '
          this.WRITVA70to79 = ' '
          this.WRITVA80to84 = ' '
          this.WRITVA85to89 = ' '
          this.WRITVA90to109 = ' '
          this.WRITVA110to115 = ' '
          this.WRITVA116to120 = ' '
          this.WRITVA121to130 = ' '
          this.WRITVA130 = ' '

            if(Number(x.writva) < 70){
              this.WRITVA69 = x.writva;
            }
            else if(Number(x.writva) >= 70 && Number(x.writva) <= 79)
            {
              this.WRITVA70to79 = x.writva;
            }
            else if(Number(x.writva) >= 80 && Number(x.writva) <= 84)
            {
              this.WRITVA80to84 = x.writva;
            }
            else if(Number(x.writva) >= 85 && Number(x.writva) <= 89)
            {
              this.WRITVA85to89 = x.writva;
            }
            else if(Number(x.writva) >= 90 && Number(x.writva) <= 109)
            {
              this.WRITVA90to109 = x.writva;
            }
            else if(Number(x.writva) >= 110 && Number(x.writva) <= 115)
            {
              this.WRITVA110to115 = x.writva;
            }
            else if(Number(x.writva) >= 116 && Number(x.writva) <= 120)
            {
              this.WRITVA116to120 = x.writva;
            }
            else if(Number(x.writva) >= 121 && Number(x.writva) <= 130)
            {
              this.WRITVA121to130 = x.writva;
            }
            if(Number(x.writva) > 130){
              this.WRITVA130 = x.writva;
            }
        }


        //x.writvc,
        if(x.writvc != '')
        {
          this.WRITVC69 = ' '
          this.WRITVC70to79 = ' '
          this.WRITVC80to84 = ' '
          this.WRITVC85to89 = ' '
          this.WRITVC90to109 = ' '
          this.WRITVC110to115 = ' '
          this.WRITVC116to120 = ' '
          this.WRITVC121to130 = ' '
          this.WRITVC130 = ' '
            if(Number(x.writvc) < 70){
              this.WRITVC69 = x.writvc;
            }
            else if(Number(x.writvc) >= 70 && Number(x.writvc) <= 79)
            {
              this.WRITVC70to79 = x.writvc;
            }
            else if(Number(x.writvc) >= 80 && Number(x.writvc) <= 84)
            {
              this.WRITVC80to84 = x.writvc;
            }
            else if(Number(x.writvc) >= 85 && Number(x.writvc) <= 89)
            {
              this.WRITVC85to89 = x.writvc;
            }
            else if(Number(x.writvc) >= 90 && Number(x.writvc) <= 109)
            {
              this.WRITVC90to109 = x.writvc;
            }
            else if(Number(x.writvc) >= 110 && Number(x.writvc) <= 115)
            {
              this.WRITVC110to115 = x.writvc;
            }
            else if(Number(x.writvc) >= 116 && Number(x.writvc) <= 120)
            {
              this.WRITVC116to120 = x.writvc;
            }
            else if(Number(x.writvc) >= 121 && Number(x.writvc) <= 130)
            {
              this.WRITVC121to130 = x.writvc;
            }
            if(Number(x.writvc) > 130){
              this.WRITVC130 = x.writvc;
            }
        }
        
        //x.writvb,
        if(x.writvb != '')
        {
          this.WRITVB69 = ' '
          this.WRITVB70to79 = ' '
          this.WRITVB80to84 = ' '
          this.WRITVB85to89 = ' '
          this.WRITVB90to109 = ' '
          this.WRITVB110to115 = ' '
          this.WRITVB116to120 = ' '
          this.WRITVB121to130 = ' '
          this.WRITVB130 = ' '
          this.WRITVB95CI = ' '
            if(Number(x.writvb) < 70){
              this.WRITVB69 = x.writvb;
            }
            else if(Number(x.writvb) >= 70 && Number(x.writvb) <= 79)
            {
              this.WRITVB70to79 = x.writvb;
            }
            else if(Number(x.writvb) >= 80 && Number(x.writvb) <= 84)
            {
              this.WRITVB80to84 = x.writvb;
            }
            else if(Number(x.writvb) >= 85 && Number(x.writvb) <= 89)
            {
              this.WRITVB85to89 = x.writvb;
            }
            else if(Number(x.writvb) >= 90 && Number(x.writvb) <= 109)
            {
              this.WRITVB90to109 = x.writvb;
            }
            else if(Number(x.writvb) >= 110 && Number(x.writvb) <= 115)
            {
              this.WRITVB110to115 = x.writvb;
            }
            else if(Number(x.writvb) >= 116 && Number(x.writvb) <= 120)
            {
              this.WRITVB116to120 = x.writvb;
            }
            else if(Number(x.writvb) >= 121 && Number(x.writvb) <= 130)
            {
              this.WRITVB121to130 = x.writvb;
            }
            if(Number(x.writvb) > 130){
              this.WRITVB130 = x.writvb;
            }
        }

        //x.writmat,
        if(x.writmat != '')
        {
          this.WRITMT69 = ' '
          this.WRITMT70to79 = ' '
          this.WRITMT80to84 = ' '
          this.WRITMT85to89 = ' '
          this.WRITMT90to109 = ' '
          this.WRITMT110to115 = ' '
          this.WRITMT116to120 = ' '
          this.WRITMT121to130 = ' '
          this.WRITMT130 = ' '
            if(Number(x.writmat) < 70){
              this.WRITMT69 = x.writmat;
            }
            else if(Number(x.writmat) >= 70 && Number(x.writmat) <= 79)
            {
              this.WRITMT70to79 = x.writmat;
            }
            else if(Number(x.writmat) >= 80 && Number(x.writmat) <= 84)
            {
              this.WRITMT80to84 = x.writmat;
            }
            else if(Number(x.writmat) >= 85 && Number(x.writmat) <= 89)
            {
              this.WRITMT85to89 = x.writmat;
            }
            else if(Number(x.writmat) >= 90 && Number(x.writmat) <= 109)
            {
              this.WRITMT90to109 = x.writmat;
            }
            else if(Number(x.writmat) >= 110 && Number(x.writmat) <= 115)
            {
              this.WRITMT110to115 = x.writmat;
            }
            else if(Number(x.writmat) >= 116 && Number(x.writmat) <= 120)
            {
              this.WRITMT116to120 = x.writmat;
            }
            else if(Number(x.writmat) >= 121 && Number(x.writmat) <= 130)
            {
              this.WRITMT121to130 = x.writmat;
            }
            if(Number(x.writmat) > 130){
              this.WRITMT130 = x.writmat;
            }
        }

        //x.tomaL2DF,
        if(x.tomaL2DF != '')
        {
          this.TOMAL2DF69 = ' '
          this.TOMAL2DF70to79 = ' '
          this.TOMAL2DF80to84 = ' '
          this.TOMAL2DF85to89 = ' '
          this.TOMAL2DF90to109 = ' '
          this.TOMAL2DF110to115 = ' '
          this.TOMAL2DF116to120 = ' '
          this.TOMAL2DF121to130 = ' '
          this.TOMAL2DF130 = ' '
            if(Number(x.tomaL2DF) < 70){
              this.TOMAL2DF69 = x.tomaL2DF;
            }
            else if(Number(x.tomaL2DF) >= 70 && Number(x.tomaL2DF) <= 79)
            {
              this.TOMAL2DF70to79 = x.tomaL2DF;
            }
            else if(Number(x.tomaL2DF) >= 80 && Number(x.tomaL2DF) <= 84)
            {
              this.TOMAL2DF80to84 = x.tomaL2DF;
            }
            else if(Number(x.tomaL2DF) >= 85 && Number(x.tomaL2DF) <= 89)
            {
              this.TOMAL2DF85to89 = x.tomaL2DF;
            }
            else if(Number(x.tomaL2DF) >= 90 && Number(x.tomaL2DF) <= 109)
            {
              this.TOMAL2DF90to109 = x.tomaL2DF;
            }
            else if(Number(x.tomaL2DF) >= 110 && Number(x.tomaL2DF) <= 115)
            {
              this.TOMAL2DF110to115 = x.tomaL2DF;
            }
            else if(Number(x.tomaL2DF) >= 116 && Number(x.tomaL2DF) <= 120)
            {
              this.TOMAL2DF116to120 = x.tomaL2DF;
            }
            else if(Number(x.tomaL2DF) >= 121 && Number(x.tomaL2DF) <= 130)
            {
              this.TOMAL2DF121to130 = x.tomaL2DF;
            }
            if(Number(x.tomaL2DF) > 130){
              this.TOMAL2DF130 = x.tomaL2DF;
            }
        }

        //x.tomaL2LF,
        if(x.tomaL2LF != '')
        {
          this.TOMAL2LF69 = ' '
          this.TOMAL2LF70to79 = ' '
          this.TOMAL2LF80to84 = ' '
          this.TOMAL2LF85to89 = ' '
          this.TOMAL2LF90to109 = ' '
          this.TOMAL2LF110to115 = ' '
          this.TOMAL2LF116to120 = ' '
          this.TOMAL2LF121to130 = ' '
          this.TOMAL2LF130 = ' '
            if(Number(x.tomaL2LF) < 70){
              this.TOMAL2LF69 = x.tomaL2LF;
            }
            else if(Number(x.tomaL2LF) >= 70 && Number(x.tomaL2LF) <= 79)
            {
              this.TOMAL2LF70to79 = x.tomaL2LF;
            }
            else if(Number(x.tomaL2LF) >= 80 && Number(x.tomaL2LF) <= 84)
            {
              this.TOMAL2LF80to84 = x.tomaL2LF;
            }
            else if(Number(x.tomaL2LF) >= 85 && Number(x.tomaL2LF) <= 89)
            {
              this.TOMAL2LF85to89 = x.tomaL2LF;
            }
            else if(Number(x.tomaL2LF) >= 90 && Number(x.tomaL2LF) <= 109)
            {
              this.TOMAL2LF90to109 = x.tomaL2LF;
            }
            else if(Number(x.tomaL2LF) >= 110 && Number(x.tomaL2LF) <= 115)
            {
              this.TOMAL2LF110to115 = x.tomaL2LF;
            }
            else if(Number(x.tomaL2LF) >= 116 && Number(x.tomaL2LF) <= 120)
            {
              this.TOMAL2LF116to120 = x.tomaL2LF;
            }
            else if(Number(x.tomaL2LF) >= 121 && Number(x.tomaL2LF) <= 130)
            {
              this.TOMAL2LF121to130 = x.tomaL2LF;
            }
            if(Number(x.tomaL2LF) > 130){
              this.TOMAL2LF130 = x.tomaL2LF;
            }
        }

        //x.tomaL2DB,
        if(x.tomaL2DB != '')
        {
          this.TOMAL2DB69 = ' '
          this.TOMAL2DB70to79 = ' '
          this.TOMAL2DB80to84 = ' '
          this.TOMAL2DB85to89 = ' '
          this.TOMAL2DB90to109 = ' '
          this.TOMAL2DB110to115 = ' '
          this.TOMAL2DB116to120 = ' '
          this.TOMAL2DB121to130 = ' '
          this.TOMAL2DB130 = ' '
            if(Number(x.tomaL2DB) < 70){
              this.TOMAL2DB69 = x.tomaL2DB;
            }
            else if(Number(x.tomaL2DB) >= 70 && Number(x.tomaL2DB) <= 79)
            {
              this.TOMAL2DB70to79 = x.tomaL2DB;
            }
            else if(Number(x.tomaL2DB) >= 80 && Number(x.tomaL2DB) <= 84)
            {
              this.TOMAL2DB80to84 = x.tomaL2DB;
            }
            else if(Number(x.tomaL2DB) >= 85 && Number(x.tomaL2DB) <= 89)
            {
              this.TOMAL2DB85to89 = x.tomaL2DB;
            }
            else if(Number(x.tomaL2DB) >= 90 && Number(x.tomaL2DB) <= 109)
            {
              this.TOMAL2DB90to109 = x.tomaL2DB;
            }
            else if(Number(x.tomaL2DB) >= 110 && Number(x.tomaL2DB) <= 115)
            {
              this.TOMAL2DB110to115 = x.tomaL2DB;
            }
            else if(Number(x.tomaL2DB) >= 116 && Number(x.tomaL2DB) <= 120)
            {
              this.TOMAL2DB116to120 = x.tomaL2DB;
            }
            else if(Number(x.tomaL2DB) >= 121 && Number(x.tomaL2DB) <= 130)
            {
              this.TOMAL2DB121to130 = x.tomaL2DB;
            }
            if(Number(x.tomaL2DB) > 130){
              this.TOMAL2DB130 = x.tomaL2DB;
            }
        }

        //x.tomaL2LB,
        if(x.tomaL2LB != '')
        {
          this.TOMAL2LB69 = ' '
          this.TOMAL2LB70to79 = ' '
          this.TOMAL2LB80to84 = ' '
          this.TOMAL2LB85to89 = ' '
          this.TOMAL2LB90to109 = ' '
          this.TOMAL2LB110to115 = ' '
          this.TOMAL2LB116to120 = ' '
          this.TOMAL2LB121to130 = ' '
          this.TOMAL2LB130 = ' '
            if(Number(x.tomaL2LB) < 70){
              this.TOMAL2LB69 = x.tomaL2LB;
            }
            else if(Number(x.tomaL2LB) >= 70 && Number(x.tomaL2LB) <= 79)
            {
              this.TOMAL2LB70to79 = x.tomaL2LB;
            }
            else if(Number(x.tomaL2LB) >= 80 && Number(x.tomaL2LB) <= 84)
            {
              this.TOMAL2LB80to84 = x.tomaL2LB;
            }
            else if(Number(x.tomaL2LB) >= 85 && Number(x.tomaL2LB) <= 89)
            {
              this.TOMAL2LB85to89 = x.tomaL2LB;
            }
            else if(Number(x.tomaL2LB) >= 90 && Number(x.tomaL2LB) <= 109)
            {
              this.TOMAL2LB90to109 = x.tomaL2LB;
            }
            else if(Number(x.tomaL2LB) >= 110 && Number(x.tomaL2LB) <= 115)
            {
              this.TOMAL2LB110to115 = x.tomaL2LB;
            }
            else if(Number(x.tomaL2LB) >= 116 && Number(x.tomaL2LB) <= 120)
            {
              this.TOMAL2LB116to120 = x.tomaL2LB;
            }
            else if(Number(x.tomaL2LB) >= 121 && Number(x.tomaL2LB) <= 130)
            {
              this.TOMAL2LB121to130 = x.tomaL2LB;
            }
            if(Number(x.tomaL2LB) > 130){
              this.TOMAL2LB130 = x.tomaL2LB;
            }
        }

        //x.tomaL2ACI,
        if(x.tomaL2ACI != '')
        {
          this.TOMAL2ACI69 = ' '
          this.TOMAL2ACI70to79 = ' '
          this.TOMAL2ACI80to84 = ' '
          this.TOMAL2ACI85to89 = ' '
          this.TOMAL2ACI90to109 = ' '
          this.TOMAL2ACI110to115 = ' '
          this.TOMAL2ACI116to120 = ' '
          this.TOMAL2ACI121to130 = ' '
          this.TOMAL2ACI130 = ' '
          this.TOMAL2ACI95CI = ' '
            if(Number(x.tomaL2ACI) < 70){
              this.TOMAL2ACI69 = x.tomaL2ACI;
            }
            else if(Number(x.tomaL2ACI) >= 70 && Number(x.tomaL2ACI) <= 79)
            {
              this.TOMAL2ACI70to79 = x.tomaL2ACI;
            }
            else if(Number(x.tomaL2ACI) >= 80 && Number(x.tomaL2ACI) <= 84)
            {
              this.TOMAL2ACI80to84 = x.tomaL2ACI;
            }
            else if(Number(x.tomaL2ACI) >= 85 && Number(x.tomaL2ACI) <= 89)
            {
              this.TOMAL2ACI85to89 = x.tomaL2ACI;
            }
            else if(Number(x.tomaL2ACI) >= 90 && Number(x.tomaL2ACI) <= 109)
            {
              this.TOMAL2ACI90to109 = x.tomaL2ACI;
            }
            else if(Number(x.tomaL2ACI) >= 110 && Number(x.tomaL2ACI) <= 115)
            {
              this.TOMAL2ACI110to115 = x.tomaL2ACI;
            }
            else if(Number(x.tomaL2ACI) >= 116 && Number(x.tomaL2ACI) <= 120)
            {
              this.TOMAL2ACI116to120 = x.tomaL2ACI;
            }
            else if(Number(x.tomaL2ACI) >= 121 && Number(x.tomaL2ACI) <= 130)
            {
              this.TOMAL2ACI121to130 = x.tomaL2ACI;
            }
            if(Number(x.tomaL2ACI) > 130){
              this.TOMAL2ACI130 = x.tomaL2ACI;
            }
        }

        // x.ctopP2MD,
        if(x.ctopP2MD != '')
        {
          this.CTOPP2MD69 = ' '
          this.CTOPP2MD70to79 = ' '
          this.CTOPP2MD80to84 = ' '
          this.CTOPP2MD85to89 = ' '
          this.CTOPP2MD90to109 = ' '
          this.CTOPP2MD110to115 = ' '
          this.CTOPP2MD116to120 = ' '
          this.CTOPP2MD121to130 = ' '
          this.CTOPP2MD130 = ' '
            if(Number(x.ctopP2MD) < 70){
              this.CTOPP2MD69 = x.ctopP2MD;
            }
            else if(Number(x.ctopP2MD) >= 70 && Number(x.ctopP2MD) <= 79)
            {
              this.CTOPP2MD70to79 = x.ctopP2MD;
            }
            else if(Number(x.ctopP2MD) >= 80 && Number(x.ctopP2MD) <= 84)
            {
              this.CTOPP2MD80to84 = x.ctopP2MD;
            }
            else if(Number(x.ctopP2MD) >= 85 && Number(x.ctopP2MD) <= 89)
            {
              this.CTOPP2MD85to89 = x.ctopP2MD;
            }
            else if(Number(x.ctopP2MD) >= 90 && Number(x.ctopP2MD) <= 109)
            {
              this.CTOPP2MD90to109 = x.ctopP2MD;
            }
            else if(Number(x.ctopP2MD) >= 110 && Number(x.ctopP2MD) <= 115)
            {
              this.CTOPP2MD110to115 = x.ctopP2MD;
            }
            else if(Number(x.ctopP2MD) >= 116 && Number(x.ctopP2MD) <= 120)
            {
              this.CTOPP2MD116to120 = x.ctopP2MD;
            }
            else if(Number(x.ctopP2MD) >= 121 && Number(x.ctopP2MD) <= 130)
            {
              this.CTOPP2MD121to130 = x.ctopP2MD;
            }
            if(Number(x.ctopP2MD) > 130){
              this.CTOPP2MD130 = x.ctopP2MD;
            }
        }

        // x.ctopP2NWR,
        if(x.ctopP2NWR != '')
        {
          this.CTOPP2NWR69 = ' '
          this.CTOPP2NWR70to79 = ' '
          this.CTOPP2NWR80to84 = ' '
          this.CTOPP2NWR85to89 = ' '
          this.CTOPP2NWR90to109 = ' '
          this.CTOPP2NWR110to115 = ' '
          this.CTOPP2NWR116to120 = ' '
          this.CTOPP2NWR121to130 = ' '
          this.CTOPP2NWR130 = ' '
            if(Number(x.ctopP2NWR) < 70){
              this.CTOPP2NWR69 = x.ctopP2NWR;
            }
            else if(Number(x.ctopP2NWR) >= 70 && Number(x.ctopP2NWR) <= 79)
            {
              this.CTOPP2NWR70to79 = x.ctopP2NWR;
            }
            else if(Number(x.ctopP2NWR) >= 80 && Number(x.ctopP2NWR) <= 84)
            {
              this.CTOPP2NWR80to84 = x.ctopP2NWR;
            }
            else if(Number(x.ctopP2NWR) >= 85 && Number(x.ctopP2NWR) <= 89)
            {
              this.CTOPP2NWR85to89 = x.ctopP2NWR;
            }
            else if(Number(x.ctopP2NWR) >= 90 && Number(x.ctopP2NWR) <= 109)
            {
              this.CTOPP2NWR90to109 = x.ctopP2NWR;
            }
            else if(Number(x.ctopP2NWR) >= 110 && Number(x.ctopP2NWR) <= 115)
            {
              this.CTOPP2NWR110to115 = x.ctopP2NWR;
            }
            else if(Number(x.ctopP2NWR) >= 116 && Number(x.ctopP2NWR) <= 120)
            {
              this.CTOPP2NWR116to120 = x.ctopP2NWR;
            }
            else if(Number(x.ctopP2NWR) >= 121 && Number(x.ctopP2NWR) <= 130)
            {
              this.CTOPP2NWR121to130 = x.ctopP2NWR;
            }
            if(Number(x.ctopP2NWR) > 130){
              this.CTOPP2NWR130 = x.ctopP2NWR;
            }
        }

        // x.ctopP2PM,
        if(x.ctopP2PM != '')
        {
          this.CTOPP2PM69 = ' '
          this.CTOPP2PM70to79 = ' '
          this.CTOPP2PM80to84 = ' '
          this.CTOPP2PM85to89 = ' '
          this.CTOPP2PM90to109 = ' '
          this.CTOPP2PM110to115 = ' '
          this.CTOPP2PM116to120 = ' '
          this.CTOPP2PM121to130 = ' '
          this.CTOPP2PM130 = ' '
          this.CTOPP2PM95CI = ' '
            if(Number(x.ctopP2PM) < 70){
              this.CTOPP2PM69 = x.ctopP2PM;
            }
            else if(Number(x.ctopP2PM) >= 70 && Number(x.ctopP2PM) <= 79)
            {
              this.CTOPP2PM70to79 = x.ctopP2PM;
            }
            else if(Number(x.ctopP2PM) >= 80 && Number(x.ctopP2PM) <= 84)
            {
              this.CTOPP2PM80to84 = x.ctopP2PM;
            }
            else if(Number(x.ctopP2PM) >= 85 && Number(x.ctopP2PM) <= 89)
            {
              this.CTOPP2PM85to89 = x.ctopP2PM;
            }
            else if(Number(x.ctopP2PM) >= 90 && Number(x.ctopP2PM) <= 109)
            {
              this.CTOPP2PM90to109 = x.ctopP2PM;
            }
            else if(Number(x.ctopP2PM) >= 110 && Number(x.ctopP2PM) <= 115)
            {
              this.CTOPP2PM110to115 = x.ctopP2PM;
            }
            else if(Number(x.ctopP2PM) >= 116 && Number(x.ctopP2PM) <= 120)
            {
              this.CTOPP2PM116to120 = x.ctopP2PM;
            }
            else if(Number(x.ctopP2PM) >= 121 && Number(x.ctopP2PM) <= 130)
            {
              this.CTOPP2PM121to130 = x.ctopP2PM;
            }
            if(Number(x.ctopP2PM) > 130){
              this.CTOPP2PM130 = x.ctopP2PM;
            }
        }

        // x.ctopP2EL,
        if(x.ctopP2EL != '')
        {
          this.CTOPP2EL69 = ' '
          this.CTOPP2EL70to79 = ' '
          this.CTOPP2EL80to84 = ' '
          this.CTOPP2EL85to89 = ' '
          this.CTOPP2EL90to109 = ' '
          this.CTOPP2EL110to115 = ' '
          this.CTOPP2EL116to120 = ' '
          this.CTOPP2EL121to130 = ' '
          this.CTOPP2EL130 = ' '
            if(Number(x.ctopP2EL) < 70){
              this.CTOPP2EL69 = x.ctopP2EL;
            }
            else if(Number(x.ctopP2EL) >= 70 && Number(x.ctopP2EL) <= 79)
            {
              this.CTOPP2EL70to79 = x.ctopP2EL;
            }
            else if(Number(x.ctopP2EL) >= 80 && Number(x.ctopP2EL) <= 84)
            {
              this.CTOPP2EL80to84 = x.ctopP2EL;
            }
            else if(Number(x.ctopP2EL) >= 85 && Number(x.ctopP2EL) <= 89)
            {
              this.CTOPP2EL85to89 = x.ctopP2EL;
            }
            else if(Number(x.ctopP2EL) >= 90 && Number(x.ctopP2EL) <= 109)
            {
              this.CTOPP2EL90to109 = x.ctopP2EL;
            }
            else if(Number(x.ctopP2EL) >= 110 && Number(x.ctopP2EL) <= 115)
            {
              this.CTOPP2EL110to115 = x.ctopP2EL;
            }
            else if(Number(x.ctopP2EL) >= 116 && Number(x.ctopP2EL) <= 120)
            {
              this.CTOPP2EL116to120 = x.ctopP2EL;
            }
            else if(Number(x.ctopP2EL) >= 121 && Number(x.ctopP2EL) <= 130)
            {
              this.CTOPP2EL121to130 = x.ctopP2EL;
            }
            if(Number(x.ctopP2EL) > 130){
              this.CTOPP2EL130 = x.ctopP2EL;
            }
        }

        // x.ctopP2BW,
        if(x.ctopP2BW != '')
        {
          this.CTOPP2BW69 = ' '
          this.CTOPP2BW70to79 = ' '
          this.CTOPP2BW80to84 = ' '
          this.CTOPP2BW85to89 = ' '
          this.CTOPP2BW90to109 = ' '
          this.CTOPP2BW110to115 = ' '
          this.CTOPP2BW116to120 = ' '
          this.CTOPP2BW121to130 = ' '
          this.CTOPP2BW130 = ' '
            if(Number(x.ctopP2BW) < 70){
              this.CTOPP2BW69 = x.ctopP2BW;
            }
            else if(Number(x.ctopP2BW) >= 70 && Number(x.ctopP2BW) <= 79)
            {
              this.CTOPP2BW70to79 = x.ctopP2BW;
            }
            else if(Number(x.ctopP2BW) >= 80 && Number(x.ctopP2BW) <= 84)
            {
              this.CTOPP2BW80to84 = x.ctopP2BW;
            }
            else if(Number(x.ctopP2BW) >= 85 && Number(x.ctopP2BW) <= 89)
            {
              this.CTOPP2BW85to89 = x.ctopP2BW;
            }
            else if(Number(x.ctopP2BW) >= 90 && Number(x.ctopP2BW) <= 109)
            {
              this.CTOPP2BW90to109 = x.ctopP2BW;
            }
            else if(Number(x.ctopP2BW) >= 110 && Number(x.ctopP2BW) <= 115)
            {
              this.CTOPP2BW110to115 = x.ctopP2BW;
            }
            else if(Number(x.ctopP2BW) >= 116 && Number(x.ctopP2BW) <= 120)
            {
              this.CTOPP2BW116to120 = x.ctopP2BW;
            }
            else if(Number(x.ctopP2BW) >= 121 && Number(x.ctopP2BW) <= 130)
            {
              this.CTOPP2BW121to130 = x.ctopP2BW;
            }
            if(Number(x.ctopP2BW) > 130){
              this.CTOPP2BW130 = x.ctopP2BW;
            }
        }

        // x.ctopP2PI,
        if(x.ctopP2PI != '')
        {
          this.CTOPP2PI69 = ' '
          this.CTOPP2PI70to79 = ' '
          this.CTOPP2PI80to84 = ' '
          this.CTOPP2PI85to89 = ' '
          this.CTOPP2PI90to109 = ' '
          this.CTOPP2PI110to115 = ' '
          this.CTOPP2PI116to120 = ' '
          this.CTOPP2PI121to130 = ' '
          this.CTOPP2PI130 = ' '
            if(Number(x.ctopP2PI) < 70){
              this.CTOPP2PI69 = x.ctopP2PI;
            }
            else if(Number(x.ctopP2PI) >= 70 && Number(x.ctopP2PI) <= 79)
            {
              this.CTOPP2PI70to79 = x.ctopP2PI;
            }
            else if(Number(x.ctopP2PI) >= 80 && Number(x.ctopP2PI) <= 84)
            {
              this.CTOPP2PI80to84 = x.ctopP2PI;
            }
            else if(Number(x.ctopP2PI) >= 85 && Number(x.ctopP2PI) <= 89)
            {
              this.CTOPP2PI85to89 = x.ctopP2PI;
            }
            else if(Number(x.ctopP2PI) >= 90 && Number(x.ctopP2PI) <= 109)
            {
              this.CTOPP2PI90to109 = x.ctopP2PI;
            }
            else if(Number(x.ctopP2PI) >= 110 && Number(x.ctopP2PI) <= 115)
            {
              this.CTOPP2PI110to115 = x.ctopP2PI;
            }
            else if(Number(x.ctopP2PI) >= 116 && Number(x.ctopP2PI) <= 120)
            {
              this.CTOPP2PI116to120 = x.ctopP2PI;
            }
            else if(Number(x.ctopP2PI) >= 121 && Number(x.ctopP2PI) <= 130)
            {
              this.CTOPP2PI121to130 = x.ctopP2PI;
            }
            if(Number(x.ctopP2PI) > 130){
              this.CTOPP2PI130 = x.ctopP2PI;
            }
        }

        // x.ctopP2PAC,
        if(x.ctopP2PAC != '')
        {
          this.CTOPP2PAC69 = ' '
          this.CTOPP2PAC70to79 = ' '
          this.CTOPP2PAC80to84 = ' '
          this.CTOPP2PAC85to89 = ' '
          this.CTOPP2PAC90to109 = ' '
          this.CTOPP2PAC110to115 = ' '
          this.CTOPP2PAC116to120 = ' '
          this.CTOPP2PAC121to130 = ' '
          this.CTOPP2PAC130 = ' '
          this.CTOPP2PAC95CI = ' '
            if(Number(x.ctopP2PAC) < 70){
              this.CTOPP2PAC69 = x.ctopP2PAC;
            }
            else if(Number(x.ctopP2PAC) >= 70 && Number(x.ctopP2PAC) <= 79)
            {
              this.CTOPP2PAC70to79 = x.ctopP2PAC;
            }
            else if(Number(x.ctopP2PAC) >= 80 && Number(x.ctopP2PAC) <= 84)
            {
              this.CTOPP2PAC80to84 = x.ctopP2PAC;
            }
            else if(Number(x.ctopP2PAC) >= 85 && Number(x.ctopP2PAC) <= 89)
            {
              this.CTOPP2PAC85to89 = x.ctopP2PAC;
            }
            else if(Number(x.ctopP2PAC) >= 90 && Number(x.ctopP2PAC) <= 109)
            {
              this.CTOPP2PAC90to109 = x.ctopP2PAC;
            }
            else if(Number(x.ctopP2PAC) >= 110 && Number(x.ctopP2PAC) <= 115)
            {
              this.CTOPP2PAC110to115 = x.ctopP2PAC;
            }
            else if(Number(x.ctopP2PAC) >= 116 && Number(x.ctopP2PAC) <= 120)
            {
              this.CTOPP2PAC116to120 = x.ctopP2PAC;
            }
            else if(Number(x.ctopP2PAC) >= 121 && Number(x.ctopP2PAC) <= 130)
            {
              this.CTOPP2PAC121to130 = x.ctopP2PAC;
            }
            if(Number(x.ctopP2PAC) > 130){
              this.CTOPP2PAC130 = x.ctopP2PAC;
            }
        }

        // x.ctopP2RDN,
        if(x.ctopP2RDN != '')
        {
          this.CTOPP2RDN69 = ' '
          this.CTOPP2RDN70to79 = ' '
          this.CTOPP2RDN80to84 = ' '
          this.CTOPP2RDN85to89 = ' '
          this.CTOPP2RDN90to109 = ' '
          this.CTOPP2RDN110to115 = ' '
          this.CTOPP2RDN116to120 = ' '
          this.CTOPP2RDN121to130 = ' '
          this.CTOPP2RDN130 = ' '
            if(Number(x.ctopP2RDN) < 70){
              this.CTOPP2RDN69 = x.ctopP2RDN;
            }
            else if(Number(x.ctopP2RDN) >= 70 && Number(x.ctopP2RDN) <= 79)
            {
              this.CTOPP2RDN70to79 = x.ctopP2RDN;
            }
            else if(Number(x.ctopP2RDN) >= 80 && Number(x.ctopP2RDN) <= 84)
            {
              this.CTOPP2RDN80to84 = x.ctopP2RDN;
            }
            else if(Number(x.ctopP2RDN) >= 85 && Number(x.ctopP2RDN) <= 89)
            {
              this.CTOPP2RDN85to89 = x.ctopP2RDN;
            }
            else if(Number(x.ctopP2RDN) >= 90 && Number(x.ctopP2RDN) <= 109)
            {
              this.CTOPP2RDN90to109 = x.ctopP2RDN;
            }
            else if(Number(x.ctopP2RDN) >= 110 && Number(x.ctopP2RDN) <= 115)
            {
              this.CTOPP2RDN110to115 = x.ctopP2RDN;
            }
            else if(Number(x.ctopP2RDN) >= 116 && Number(x.ctopP2RDN) <= 120)
            {
              this.CTOPP2RDN116to120 = x.ctopP2RDN;
            }
            else if(Number(x.ctopP2RDN) >= 121 && Number(x.ctopP2RDN) <= 130)
            {
              this.CTOPP2RDN121to130 = x.ctopP2RDN;
            }
            if(Number(x.ctopP2RDN) > 130){
              this.CTOPP2RDN130 = x.ctopP2RDN;
            }
        }

        // x.ctopP2RLN,
        if(x.ctopP2RLN != '')
        {
          this.CTOPP2RLN69 = ' '
          this.CTOPP2RLN70to79 = ' '
          this.CTOPP2RLN80to84 = ' '
          this.CTOPP2RLN85to89 = ' '
          this.CTOPP2RLN90to109 = ' '
          this.CTOPP2RLN110to115 = ' '
          this.CTOPP2RLN116to120 = ' '
          this.CTOPP2RLN121to130 = ' '
          this.CTOPP2RLN130 = ' '
            if(Number(x.ctopP2RLN) < 70){
              this.CTOPP2RLN69 = x.ctopP2RLN;
            }
            else if(Number(x.ctopP2RLN) >= 70 && Number(x.ctopP2RLN) <= 79)
            {
              this.CTOPP2RLN70to79 = x.ctopP2RLN;
            }
            else if(Number(x.ctopP2RLN) >= 80 && Number(x.ctopP2RLN) <= 84)
            {
              this.CTOPP2RLN80to84 = x.ctopP2RLN;
            }
            else if(Number(x.ctopP2RLN) >= 85 && Number(x.ctopP2RLN) <= 89)
            {
              this.CTOPP2RLN85to89 = x.ctopP2RLN;
            }
            else if(Number(x.ctopP2RLN) >= 90 && Number(x.ctopP2RLN) <= 109)
            {
              this.CTOPP2RLN90to109 = x.ctopP2RLN;
            }
            else if(Number(x.ctopP2RLN) >= 110 && Number(x.ctopP2RLN) <= 115)
            {
              this.CTOPP2RLN110to115 = x.ctopP2RLN;
            }
            else if(Number(x.ctopP2RLN) >= 116 && Number(x.ctopP2RLN) <= 120)
            {
              this.CTOPP2RLN116to120 = x.ctopP2RLN;
            }
            else if(Number(x.ctopP2RLN) >= 121 && Number(x.ctopP2RLN) <= 130)
            {
              this.CTOPP2RLN121to130 = x.ctopP2RLN;
            }
            if(Number(x.ctopP2RLN) > 130){
              this.CTOPP2RLN130 = x.ctopP2RLN;
            }
        }

        // x.ctopP2RSN,
        if(x.ctopP2RSN != '')
        {
          this.CTOPP2RSN69 = ' '
          this.CTOPP2RSN70to79 = ' '
          this.CTOPP2RSN80to84 = ' '
          this.CTOPP2RSN85to89 = ' '
          this.CTOPP2RSN90to109 = ' '
          this.CTOPP2RSN110to115 = ' '
          this.CTOPP2RSN116to120 = ' '
          this.CTOPP2RSN121to130 = ' '
          this.CTOPP2RSN130 = ' '
          this.CTOPP2RSN95CI = ' '
        
            if(Number(x.ctopP2RSN) < 70){
              this.CTOPP2RSN69 = x.ctopP2RSN;
            }
            else if(Number(x.ctopP2RSN) >= 70 && Number(x.ctopP2RSN) <= 79)
            {
              this.CTOPP2RSN70to79 = x.ctopP2RSN;
            }
            else if(Number(x.ctopP2RSN) >= 80 && Number(x.ctopP2RSN) <= 84)
            {
              this.CTOPP2RSN80to84 = x.ctopP2RSN;
            }
            else if(Number(x.ctopP2RSN) >= 85 && Number(x.ctopP2RSN) <= 89)
            {
              this.CTOPP2RSN85to89 = x.ctopP2RSN;
            }
            else if(Number(x.ctopP2RSN) >= 90 && Number(x.ctopP2RSN) <= 109)
            {
              this.CTOPP2RSN90to109 = x.ctopP2RSN;
            }
            else if(Number(x.ctopP2RSN) >= 110 && Number(x.ctopP2RSN) <= 115)
            {
              this.CTOPP2RSN110to115 = x.ctopP2RSN;
            }
            else if(Number(x.ctopP2RSN) >= 116 && Number(x.ctopP2RSN) <= 120)
            {
              this.CTOPP2RSN116to120 = x.ctopP2RSN;
            }
            else if(Number(x.ctopP2RSN) >= 121 && Number(x.ctopP2RSN) <= 130)
            {
              this.CTOPP2RSN121to130 = x.ctopP2RSN;
            }
            if(Number(x.ctopP2RSN) > 130){
              this.CTOPP2RSN130 = x.ctopP2RSN;
            }
        }

        // x.wraT5WR,
        if(x.wraT5WR != '')
        {
          this.WRAT5WR69 = ' '
          this.WRAT5WR70to79 = ' '
          this.WRAT5WR80to84 = ' '
          this.WRAT5WR85to89 = ' '
          this.WRAT5WR90to109 = ' '
          this.WRAT5WR110to115 = ' '
          this.WRAT5WR116to120 = ' '
          this.WRAT5WR121to130 = ' '
          this.WRAT5WR130 = ' '
          this.WRAT5WR95CI = ' '
            if(Number(x.wraT5WR) < 70){
              this.WRAT5WR69 = x.wraT5WR;
            }
            else if(Number(x.wraT5WR) >= 70 && Number(x.wraT5WR) <= 79)
            {
              this.WRAT5WR70to79 = x.wraT5WR;
            }
            else if(Number(x.wraT5WR) >= 80 && Number(x.wraT5WR) <= 84)
            {
              this.WRAT5WR80to84 = x.wraT5WR;
            }
            else if(Number(x.wraT5WR) >= 85 && Number(x.wraT5WR) <= 89)
            {
              this.WRAT5WR85to89 = x.wraT5WR;
            }
            else if(Number(x.wraT5WR) >= 90 && Number(x.wraT5WR) <= 109)
            {
              this.WRAT5WR90to109 = x.wraT5WR;
            }
            else if(Number(x.wraT5WR) >= 110 && Number(x.wraT5WR) <= 115)
            {
              this.WRAT5WR110to115 = x.wraT5WR;
            }
            else if(Number(x.wraT5WR) >= 116 && Number(x.wraT5WR) <= 120)
            {
              this.WRAT5WR116to120 = x.wraT5WR;
            }
            else if(Number(x.wraT5WR) >= 121 && Number(x.wraT5WR) <= 130)
            {
              this.WRAT5WR121to130 = x.wraT5WR;
            }
            if(Number(x.wraT5WR) > 130){
              this.WRAT5WR130 = x.wraT5WR;
            }
        }

        // x.wraT5SP,
        if(x.wraT5SP != '')
        {
          this.WRAT5SP69 = ' '
          this.WRAT5SP70to79 = ' '
          this.WRAT5SP80to84 = ' '
          this.WRAT5SP85to89 = ' '
          this.WRAT5SP90to109 = ' '
          this.WRAT5SP110to115 = ' '
          this.WRAT5SP116to120 = ' '
          this.WRAT5SP121to130 = ' '
          this.WRAT5SP130 = ' '
          this.WRAT5SP95CI = ' '
            if(Number(x.wraT5SP) < 70){
              this.WRAT5SP69 = x.wraT5SP;
            }
            else if(Number(x.wraT5SP) >= 70 && Number(x.wraT5SP) <= 79)
            {
              this.WRAT5SP70to79 = x.wraT5SP;
            }
            else if(Number(x.wraT5SP) >= 80 && Number(x.wraT5SP) <= 84)
            {
              this.WRAT5SP80to84 = x.wraT5SP;
            }
            else if(Number(x.wraT5SP) >= 85 && Number(x.wraT5SP) <= 89)
            {
              this.WRAT5SP85to89 = x.wraT5SP;
            }
            else if(Number(x.wraT5SP) >= 90 && Number(x.wraT5SP) <= 109)
            {
              this.WRAT5SP90to109 = x.wraT5SP;
            }
            else if(Number(x.wraT5SP) >= 110 && Number(x.wraT5SP) <= 115)
            {
              this.WRAT5SP110to115 = x.wraT5SP;
            }
            else if(Number(x.wraT5SP) >= 116 && Number(x.wraT5SP) <= 120)
            {
              this.WRAT5SP116to120 = x.wraT5SP;
            }
            else if(Number(x.wraT5SP) >= 121 && Number(x.wraT5SP) <= 130)
            {
              this.WRAT5SP121to130 = x.wraT5SP;
            }
            if(Number(x.wraT5SP) > 130){
              this.WRAT5SP130 = x.wraT5SP;
            }
        }

        // x.towrE2SWE,
        if(x.towrE2SWE != '')
        {
          this.TOWRE2SWE69 = ' '
          this.TOWRE2SWE70to79 = ' '
          this.TOWRE2SWE80to84 = ' '
          this.TOWRE2SWE85to89 = ' '
          this.TOWRE2SWE90to109 = ' '
          this.TOWRE2SWE110to115 = ' '
          this.TOWRE2SWE116to120 = ' '
          this.TOWRE2SWE121to130 = ' '
          this.TOWRE2SWE130 = ' '
            if(Number(x.towrE2SWE) < 70){
              this.TOWRE2SWE69 = x.towrE2SWE;
            }
            else if(Number(x.towrE2SWE) >= 70 && Number(x.towrE2SWE) <= 79)
            {
              this.TOWRE2SWE70to79 = x.towrE2SWE;
            }
            else if(Number(x.towrE2SWE) >= 80 && Number(x.towrE2SWE) <= 84)
            {
              this.TOWRE2SWE80to84 = x.towrE2SWE;
            }
            else if(Number(x.towrE2SWE) >= 85 && Number(x.towrE2SWE) <= 89)
            {
              this.TOWRE2SWE85to89 = x.towrE2SWE;
            }
            else if(Number(x.towrE2SWE) >= 90 && Number(x.towrE2SWE) <= 109)
            {
              this.TOWRE2SWE90to109 = x.towrE2SWE;
            }
            else if(Number(x.towrE2SWE) >= 110 && Number(x.towrE2SWE) <= 115)
            {
              this.TOWRE2SWE110to115 = x.towrE2SWE;
            }
            else if(Number(x.towrE2SWE) >= 116 && Number(x.towrE2SWE) <= 120)
            {
              this.TOWRE2SWE116to120 = x.towrE2SWE;
            }
            else if(Number(x.towrE2SWE) >= 121 && Number(x.towrE2SWE) <= 130)
            {
              this.TOWRE2SWE121to130 = x.towrE2SWE;
            }
            if(Number(x.towrE2SWE) > 130){
              this.TOWRE2SWE130 = x.towrE2SWE;
            }
        }

        // x.towrE2PDE,
        if(x.towrE2PDE != '')
        {
          this.TOWRE2PDE69 = ' '
          this.TOWRE2PDE70to79 = ' '
          this.TOWRE2PDE80to84 = ' '
          this.TOWRE2PDE85to89 = ' '
          this.TOWRE2PDE90to109 = ' '
          this.TOWRE2PDE110to115 = ' '
          this.TOWRE2PDE116to120 = ' '
          this.TOWRE2PDE121to130 = ' '
          this.TOWRE2PDE130 = ' '
            if(Number(x.towrE2PDE) < 70){
              this.TOWRE2PDE69 = x.towrE2PDE;
            }
            else if(Number(x.towrE2PDE) >= 70 && Number(x.towrE2PDE) <= 79)
            {
              this.TOWRE2PDE70to79 = x.towrE2PDE;
            }
            else if(Number(x.towrE2PDE) >= 80 && Number(x.towrE2PDE) <= 84)
            {
              this.TOWRE2PDE80to84 = x.towrE2PDE;
            }
            else if(Number(x.towrE2PDE) >= 85 && Number(x.towrE2PDE) <= 89)
            {
              this.TOWRE2PDE85to89 = x.towrE2PDE;
            }
            else if(Number(x.towrE2PDE) >= 90 && Number(x.towrE2PDE) <= 109)
            {
              this.TOWRE2PDE90to109 = x.towrE2PDE;
            }
            else if(Number(x.towrE2PDE) >= 110 && Number(x.towrE2PDE) <= 115)
            {
              this.TOWRE2PDE110to115 = x.towrE2PDE;
            }
            else if(Number(x.towrE2PDE) >= 116 && Number(x.towrE2PDE) <= 120)
            {
              this.TOWRE2PDE116to120 = x.towrE2PDE;
            }
            else if(Number(x.towrE2PDE) >= 121 && Number(x.towrE2PDE) <= 130)
            {
              this.TOWRE2PDE121to130 = x.towrE2PDE;
            }
            if(Number(x.towrE2PDE) > 130){
              this.TOWRE2PDE130 = x.towrE2PDE;
            }
        }

        // x.towrE2IND,
        if(x.towrE2IND != '')
        {
          this.TOWRE2IND69 = ' '
          this.TOWRE2IND70to79 = ' '
          this.TOWRE2IND80to84 = ' '
          this.TOWRE2IND85to89 = ' '
          this.TOWRE2IND90to109 = ' '
          this.TOWRE2IND110to115 = ' '
          this.TOWRE2IND116to120 = ' '
          this.TOWRE2IND121to130 = ' '
          this.TOWRE2IND130 = ' '
          this.TOWRE2IND95CI = ' '
        
            if(Number(x.towrE2IND) < 70){
              this.TOWRE2IND69 = x.towrE2IND;
            }
            else if(Number(x.towrE2IND) >= 70 && Number(x.towrE2IND) <= 79)
            {
              this.TOWRE2IND70to79 = x.towrE2IND;
            }
            else if(Number(x.towrE2IND) >= 80 && Number(x.towrE2IND) <= 84)
            {
              this.TOWRE2IND80to84 = x.towrE2IND;
            }
            else if(Number(x.towrE2IND) >= 85 && Number(x.towrE2IND) <= 89)
            {
              this.TOWRE2IND85to89 = x.towrE2IND;
            }
            else if(Number(x.towrE2IND) >= 90 && Number(x.towrE2IND) <= 109)
            {
              this.TOWRE2IND90to109 = x.towrE2IND;
            }
            else if(Number(x.towrE2IND) >= 110 && Number(x.towrE2IND) <= 115)
            {
              this.TOWRE2IND110to115 = x.towrE2IND;
            }
            else if(Number(x.towrE2IND) >= 116 && Number(x.towrE2IND) <= 120)
            {
              this.TOWRE2IND116to120 = x.towrE2IND;
            }
            else if(Number(x.towrE2IND) >= 121 && Number(x.towrE2IND) <= 130)
            {
              this.TOWRE2IND121to130 = x.towrE2IND;
            }
            if(Number(x.towrE2IND) > 130){
              this.TOWRE2IND130 = x.towrE2IND;
            }
        }

        // x.arT2SC,
        if(x.arT2SC != '')
        {
          this.ART2SC69 = ' '
          this.ART2SC70to79 = ' '
          this.ART2SC80to84 = ' '
          this.ART2SC85to89 = ' '
          this.ART2SC90to109 = ' '
          this.ART2SC110to115 = ' '
          this.ART2SC116to120 = ' '
          this.ART2SC121to130 = ' '
          this.ART2SC130 = ' '
            if(Number(x.arT2SC) < 70){
              this.ART2SC69 = x.arT2SC;
            }
            else if(Number(x.arT2SC) >= 70 && Number(x.arT2SC) <= 79)
            {
              this.ART2SC70to79 = x.arT2SC;
            }
            else if(Number(x.arT2SC) >= 80 && Number(x.arT2SC) <= 84)
            {
              this.ART2SC80to84 = x.arT2SC;
            }
            else if(Number(x.arT2SC) >= 85 && Number(x.arT2SC) <= 89)
            {
              this.ART2SC85to89 = x.arT2SC;
            }
            else if(Number(x.arT2SC) >= 90 && Number(x.arT2SC) <= 109)
            {
              this.ART2SC90to109 = x.arT2SC;
            }
            else if(Number(x.arT2SC) >= 110 && Number(x.arT2SC) <= 115)
            {
              this.ART2SC110to115 = x.arT2SC;
            }
            else if(Number(x.arT2SC) >= 116 && Number(x.arT2SC) <= 120)
            {
              this.ART2SC116to120 = x.arT2SC;
            }
            else if(Number(x.arT2SC) >= 121 && Number(x.arT2SC) <= 130)
            {
              this.ART2SC121to130 = x.arT2SC;
            }
            if(Number(x.arT2SC) > 130){
              this.ART2SC130 = x.arT2SC;
            }
        }

        // x.ART2RA,
        this.ART2RA = x.arT2RA;
        // x.ART2SR,
        this.ART2SR = x.arT2SR;
        
        // x.HandWriting,
        this.ART2HW = x.handWriting;
        
        // x.Typing,
        this.ART2TY = x.typing;

        this.art2Chart = getPercentage(x.arT2SR);
        this.art2ChartVal = x.arT2SR;

        this.towre2Chart = getPercentage(x.towrE2SWE);
        this.towre2ChartVal = x.towrE2SWE;

        this.wrat5SChart = getPercentage(x.wraT5SP);
        this.wrat5SChartVal = x.wraT5SP;

        this.wrat5RChart = getPercentage(x.wraT5WR);
        this.wrat5RChartVal = x.wraT5WR;

        this.ctopp2RSNChart = getPercentage(x.ctopP2RSN);
        this.ctopp2RSNChartVal = x.ctopP2RSN;

        this.ctopp2PAChart = getPercentage(x.ctopP2PAC);
        this.ctopp2PAChartVal = x.ctopP2PAC;

        this.ctopp2PMChart = getPercentage(x.ctopP2PM);
        this.ctopp2PMChartVal = x.ctopP2PM;

        this.wMChart = getPercentage(x.writmat);
        this.wMChartVal = x.writmat;

        this.nVRChart = getPercentage(x.writvb);
        this.nVRChartVal = x.writvb;

        this.vRVChart = getPercentage(x.writvc);
        this.vRVChartVal = x.writvc;

        this.vRVAChart = getPercentage(x.writva);
        this.vRVAChartVal = x.writva;

        console.log(x);
      },
      error: (msg)=> {
        console.log(msg);
      }
    });
  }

  setHeader() {
    var userId = localStorage.getItem('userId');
    var token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
      UserId : userId || ''
    });
    return {
      headers: headers
   };
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

  // public generatePDF(): void {
  //   const pages = document.querySelectorAll('.page');
  //   const pdf = new jsPDF('p', 'mm', 'a4');
  //   const name = this.data.name;
  
  //   function generatePage(name:string ,index:number) {
  //     // if (index < pages.length) {
  //       if (index < 2) {
  //       const page = pages[index] as HTMLElement;
  
  //       html2canvas(page).then(canvas => {
  //         const imageData = canvas.toDataURL('image/png');
  
  //         if (index > 0) {
  //           pdf.addPage();
  //         }
  
  //         pdf.addImage(imageData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
  
  //         generatePage(name, index + 1);
  //       });
  //     } else {
  //       pdf.save(`${name}.pdf`);
  //     }
  //   }
  
  //   generatePage(name, 0);
  // }

  public generatePDF() {
    const element = document.getElementById('content-to-pdf');
    const name = this.data.name;
    const options = {
        margin: 1,
        filename: name+'.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 1.6, letterRendering: true, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
}

  // async generateDocx (){
  //     const element = document.getElementById('content-to-pdf');
  //     const name = this.data.name;
  //     var text = element?.outerHTML!;
  //     var converted = await asBlob(text, {
  //       orientation: 'landscape',
  //       margins: { top: 720 },
  //     });
  //     saveAs(converted as Blob , `${name}.docx`);
  // }


  async generateDocx() {
    const element = document.getElementById('content-to-pdf');
  
    if (!element) {
      console.error('Element not found');
      return;
    }
  
    // Clone the element to not modify the original content on the page
    const cloneElement = element.cloneNode(true) as HTMLElement;
  
    // Assuming you have two dropdowns based on your provided HTML
    const dropdowns = cloneElement.querySelectorAll('select');
  
    // Replace each dropdown with its selected text
    dropdowns.forEach(dropdown => {
      const selectedText = (dropdown as HTMLSelectElement).options[(dropdown as HTMLSelectElement).selectedIndex]?.text;
      const textNode = document.createTextNode(selectedText || ''); // Create a text node from the selected option's text
      dropdown.parentNode?.replaceChild(textNode, dropdown); // Replace the dropdown with the text node
    });
  
    // Now use cloneElement's HTML for document generation
    var text = cloneElement.outerHTML;
  
    const name = this.data.name;
    var converted = await asBlob(text, {
      orientation: 'landscape',
      margins: { top: 720 },
    });
  
    saveAs(converted as Blob, `${name}.docx`);
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

  selectedOptionRange3 = '';
  updatedTextRange3 = '';
  onDropdownChangeRange3(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionRange3 = selectedValue;
    this.updatedTextRange3 = selectedValue;
  }

  selectedOptionRange4 = '';
  updatedTextRange4 = '';
  onDropdownChangeRange4(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionRange4 = selectedValue;
    this.updatedTextRange4 = selectedValue;
  }

  selectedOptionStdScore2 = '';
  updatedTextStdScore2 = '';
  onDropdownChangeStdScore2(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionStdScore2 = selectedValue;
    this.updatedTextStdScore2 = selectedValue;
  }

  selectedOptionRange5 = '';
  updatedTextRange5 = '';
  onDropdownChangeRange5(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionRange5 = selectedValue;
    this.updatedTextRange5 = selectedValue;
  }

  selectedOptionRange6 = '';
  updatedTextRange6 = '';
  onDropdownChangeRange6(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionRange6 = selectedValue;
    this.updatedTextRange6 = selectedValue;
  }

  selectedOptionStdScore3 = '';
  updatedTextStdScore3 = '';
  onDropdownChangeStdScore3(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionStdScore3 = selectedValue;
    this.updatedTextStdScore3 = selectedValue;
  }

  selectedOptionRange7 = '';
  updatedTextRange7 = '';
  onDropdownChangeRange7(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionRange7 = selectedValue;
    this.updatedTextRange7 = selectedValue;
  }

  selectedOptionRange8 = '';
  updatedTextRange8 = '';
  onDropdownChangeRange8(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionRange8 = selectedValue;
    this.updatedTextRange8 = selectedValue;
  }

  selectedOptionRange9 = '';
  updatedTextRange9 = '';
  onDropdownChangeRange9(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionRange9 = selectedValue;
    this.updatedTextRange9 = selectedValue;
  }

  selectedOptionRange10 = '';
  updatedTextRange10 = '';
  onDropdownChangeRange10(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionRange10 = selectedValue;
    this.updatedTextRange10 = selectedValue;
  }

  selectedOptionTOWRE2 = '';
  updatedTextTOWRE2 = '';
  dropdownOptionsTOWRE2 : Array<any> = [
    { Name:"Choose an item.",Value:" " },
    { Name:"struggeld to",Value:"struggeld to" },
	  { Name:"was able to ",Value:"was able to " },

  ];
  onDropdownChangeTOWRE2(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionTOWRE2 = selectedValue;
    this.updatedTextTOWRE2 = selectedValue;
  }

  selectedOptionReadingComp = '';
  updatedTextReadingComp = '';
  dropdownOptionsReadingComp : Array<any> = [
    { Name:"Choose an item.",Value:" " },
    { Name:"oral reaidng speed.",Value:"oral reaidng speed." },
    { Name:"silent reading speed.",Value:"silent reading speed." },
    { Name:"oral and silent reading speed.",Value:"oral and silent reading speed." },

  ];
  onDropdownChangeReadingComp(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionReadingComp = selectedValue;
    this.updatedTextReadingComp = selectedValue;
  }

  selectedOptionReadingSpeed = '';
  updatedTextReadingSpeed = '';
  dropdownOptionsReadingSpeed : Array<any> = [
    
    { Name:"Choose an item.",Value:" " },
    { Name:"oral reading ",Value:"oral reading " },
    { Name:"silent reading ",Value:"silent reading " },
    { Name:"oral and silent ",Value:"oral and silent " },

  ];
  onDropdownChangeReadingSpeed(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionReadingSpeed = selectedValue;
    this.updatedTextReadingSpeed = selectedValue;
  }

  selectedOptionSPLDComp = '';
  updatedTextSPLDComp = '';
  dropdownOptionsSPLDComp : Array<any> = [
    { Name:"Choose an item.",Value:" " },
    { Name:"Dyslexia is a hidden difference.",Value:"Dyslexia is a hidden difference." },
    { Name:"ADHD is a hidden difference.",Value:"ADHD is a hidden difference." },
    { Name:"Developmental Coordination Disorder is a hidden difference.",Value:"Developmental Coordination Disorder is a hidden difference." },
    { Name:"Social &amp; Communication Difficulties are hidden differences.",Value:"Social &amp; Communication Difficulties are hidden differences." },
    { Name:"Dyslexia and ADHD are hidden Differences.",Value:"Dyslexia and ADHD are hidden Differences." },
    { Name:"Dyslexia, ADHD and Developmetnal Coordination Difficulties are hidden differences.",Value:"Dyslexia, ADHD and Developmetnal Coordination Difficulties are hidden differences." },
  ];
  onDropdownChangeSPLDComp(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedOptionSPLDComp = selectedValue;
    this.updatedTextSPLDComp = selectedValue;
  }

  // selectedOption11 = '';
  // updatedText11 = '';
  // onDropdownChange11(event: Event) {
  //   const selectedValue = (event.target as HTMLSelectElement).value;
  //   this.selectedOption11 = selectedValue;
  //   this.updatedText11 = selectedValue;
  // }

  // selectedOption11 = '';
  // updatedText11 = '';
  // onDropdownChange11(event: Event) {
  //   const selectedValue = (event.target as HTMLSelectElement).value;
  //   this.selectedOption11 = selectedValue;
  //   this.updatedText11 = selectedValue;
  // }

  WRITVA69 = ' '
  WRITVA70to79 = ' '
  WRITVA80to84 = ' '
  WRITVA85to89 = ' '
  WRITVA90to109 = ' '
  WRITVA110to115 = ' '
  WRITVA116to120 = ' '
  WRITVA121to130 = ' '
  WRITVA130 = ' '
  // WRITVA95CI = ' '
  WRITVC69 = ' '
  WRITVC70to79 = ' '
  WRITVC80to84 = ' '
  WRITVC85to89 = ' '
  WRITVC90to109 = ' '
  WRITVC110to115 = ' '
  WRITVC116to120 = ' '
  WRITVC121to130 = ' '
  WRITVC130 = ' '
  // WRITVC95CI = ' '
  WRITVB69 = ' '
  WRITVB70to79 = ' '
  WRITVB80to84 = ' '
  WRITVB85to89 = ' '
  WRITVB90to109 = ' '
  WRITVB110to115 = ' '
  WRITVB116to120 = ' '
  WRITVB121to130 = ' '
  WRITVB130 = ' '
  WRITVB95CI = ' '
  
  WRITMT69 = ' '
  WRITMT70to79 = ' '
  WRITMT80to84 = ' '
  WRITMT85to89 = ' '
  WRITMT90to109 = ' '
  WRITMT110to115 = ' '
  WRITMT116to120 = ' '
  WRITMT121to130 = ' '
  WRITMT130 = ' '
  // WRITMT95CI = ' '

  TOMAL2DF69 = ' '
  TOMAL2DF70to79 = ' '
  TOMAL2DF80to84 = ' '
  TOMAL2DF85to89 = ' '
  TOMAL2DF90to109 = ' '
  TOMAL2DF110to115 = ' '
  TOMAL2DF116to120 = ' '
  TOMAL2DF121to130 = ' '
  TOMAL2DF130 = ' '
  // TOMAL2DF95CI = ' '
  TOMAL2LF69 = ' '
  TOMAL2LF70to79 = ' '
  TOMAL2LF80to84 = ' '
  TOMAL2LF85to89 = ' '
  TOMAL2LF90to109 = ' '
  TOMAL2LF110to115 = ' '
  TOMAL2LF116to120 = ' '
  TOMAL2LF121to130 = ' '
  TOMAL2LF130 = ' '
  // TOMAL2LF95CI = ' '
  TOMAL2DB69 = ' '
  TOMAL2DB70to79 = ' '
  TOMAL2DB80to84 = ' '
  TOMAL2DB85to89 = ' '
  TOMAL2DB90to109 = ' '
  TOMAL2DB110to115 = ' '
  TOMAL2DB116to120 = ' '
  TOMAL2DB121to130 = ' '
  TOMAL2DB130 = ' '
  // TOMAL2DB95CI = ' '
  TOMAL2LB69 = ' '
  TOMAL2LB70to79 = ' '
  TOMAL2LB80to84 = ' '
  TOMAL2LB85to89 = ' '
  TOMAL2LB90to109 = ' '
  TOMAL2LB110to115 = ' '
  TOMAL2LB116to120 = ' '
  TOMAL2LB121to130 = ' '
  TOMAL2LB130 = ' '
  // TOMAL2LB95CI = ' '
  TOMAL2ACI69 = ' '
  TOMAL2ACI70to79 = ' '
  TOMAL2ACI80to84 = ' '
  TOMAL2ACI85to89 = ' '
  TOMAL2ACI90to109 = ' '
  TOMAL2ACI110to115 = ' '
  TOMAL2ACI116to120 = ' '
  TOMAL2ACI121to130 = ' '
  TOMAL2ACI130 = ' '
  TOMAL2ACI95CI = ' '


  CTOPP2MD69 = ' '
  CTOPP2MD70to79 = ' '
  CTOPP2MD80to84 = ' '
  CTOPP2MD85to89 = ' '
  CTOPP2MD90to109 = ' '
  CTOPP2MD110to115 = ' '
  CTOPP2MD116to120 = ' '
  CTOPP2MD121to130 = ' '
  CTOPP2MD130 = ' '
  // CTOPP2MD95CI = ' '
  CTOPP2NWR69 = ' '
  CTOPP2NWR70to79 = ' '
  CTOPP2NWR80to84 = ' '
  CTOPP2NWR85to89 = ' '
  CTOPP2NWR90to109 = ' '
  CTOPP2NWR110to115 = ' '
  CTOPP2NWR116to120 = ' '
  CTOPP2NWR121to130 = ' '
  CTOPP2NWR130 = ' '
  // CTOPP2NWR95CI = ' '
  CTOPP2PM69 = ' '
  CTOPP2PM70to79 = ' '
  CTOPP2PM80to84 = ' '
  CTOPP2PM85to89 = ' '
  CTOPP2PM90to109 = ' '
  CTOPP2PM110to115 = ' '
  CTOPP2PM116to120 = ' '
  CTOPP2PM121to130 = ' '
  CTOPP2PM130 = ' '
  CTOPP2PM95CI = ' '


  
  CTOPP2EL69 = ' '
  CTOPP2EL70to79 = ' '
  CTOPP2EL80to84 = ' '
  CTOPP2EL85to89 = ' '
  CTOPP2EL90to109 = ' '
  CTOPP2EL110to115 = ' '
  CTOPP2EL116to120 = ' '
  CTOPP2EL121to130 = ' '
  CTOPP2EL130 = ' '
  // CTOPP2EL95CI = ' '
  
  CTOPP2BW69 = ' '
  CTOPP2BW70to79 = ' '
  CTOPP2BW80to84 = ' '
  CTOPP2BW85to89 = ' '
  CTOPP2BW90to109 = ' '
  CTOPP2BW110to115 = ' '
  CTOPP2BW116to120 = ' '
  CTOPP2BW121to130 = ' '
  CTOPP2BW130 = ' '
  // CTOPP2BW95CI = ' '
  
  CTOPP2PI69 = ' '
  CTOPP2PI70to79 = ' '
  CTOPP2PI80to84 = ' '
  CTOPP2PI85to89 = ' '
  CTOPP2PI90to109 = ' '
  CTOPP2PI110to115 = ' '
  CTOPP2PI116to120 = ' '
  CTOPP2PI121to130 = ' '
  CTOPP2PI130 = ' '
  // CTOPP2PI95CI = ' '
  
  CTOPP2PAC69 = ' '
  CTOPP2PAC70to79 = ' '
  CTOPP2PAC80to84 = ' '
  CTOPP2PAC85to89 = ' '
  CTOPP2PAC90to109 = ' '
  CTOPP2PAC110to115 = ' '
  CTOPP2PAC116to120 = ' '
  CTOPP2PAC121to130 = ' '
  CTOPP2PAC130 = ' '
  CTOPP2PAC95CI = ' '
  
  CTOPP2BNW69 = ' '
  CTOPP2BNW70to79 = ' '
  CTOPP2BNW80to84 = ' '
  CTOPP2BNW85to89 = ' '
  CTOPP2BNW90to109 = ' '
  CTOPP2BNW110to115 = ' '
  CTOPP2BNW116to120 = ' '
  CTOPP2BNW121to130 = ' '
  CTOPP2BNW130 = ' '
  // CTOPP2BNW95CI = ' '
  
  CTOPP2SNW69 = ' '
  CTOPP2SNW70to79 = ' '
  CTOPP2SNW80to84 = ' '
  CTOPP2SNW85to89 = ' '
  CTOPP2SNW90to109 = ' '
  CTOPP2SNW110to115 = ' '
  CTOPP2SNW116to120 = ' '
  CTOPP2SNW121to130 = ' '
  CTOPP2SNW130 = ' '
  // CTOPP2SNW95CI = ' '
  

  CTOPP2APC69 = ' '
  CTOPP2APC70to79 = ' '
  CTOPP2APC80to84 = ' '
  CTOPP2APC85to89 = ' '
  CTOPP2APC90to109 = ' '
  CTOPP2APC110to115 = ' '
  CTOPP2APC116to120 = ' '
  CTOPP2APC121to130 = ' '
  CTOPP2APC130 = ' '
  CTOPP2APC95CI = ' '
  
  CTOPP2RDN69 = ' '
  CTOPP2RDN70to79 = ' '
  CTOPP2RDN80to84 = ' '
  CTOPP2RDN85to89 = ' '
  CTOPP2RDN90to109 = ' '
  CTOPP2RDN110to115 = ' '
  CTOPP2RDN116to120 = ' '
  CTOPP2RDN121to130 = ' '
  CTOPP2RDN130 = ' '
  // CTOPP2RDN95CI = ' '
  
  CTOPP2RLN69 = ' '
  CTOPP2RLN70to79 = ' '
  CTOPP2RLN80to84 = ' '
  CTOPP2RLN85to89 = ' '
  CTOPP2RLN90to109 = ' '
  CTOPP2RLN110to115 = ' '
  CTOPP2RLN116to120 = ' '
  CTOPP2RLN121to130 = ' '
  CTOPP2RLN130 = ' '
  // CTOPP2RLN95CI = ' '
  
  CTOPP2RSN69 = ' '
  CTOPP2RSN70to79 = ' '
  CTOPP2RSN80to84 = ' '
  CTOPP2RSN85to89 = ' '
  CTOPP2RSN90to109 = ' '
  CTOPP2RSN110to115 = ' '
  CTOPP2RSN116to120 = ' '
  CTOPP2RSN121to130 = ' '
  CTOPP2RSN130 = ' '
  CTOPP2RSN95CI = ' '


  
  WRAT5WR69 = ' '
  WRAT5WR70to79 = ' '
  WRAT5WR80to84 = ' '
  WRAT5WR85to89 = ' '
  WRAT5WR90to109 = ' '
  WRAT5WR110to115 = ' '
  WRAT5WR116to120 = ' '
  WRAT5WR121to130 = ' '
  WRAT5WR130 = ' '
  WRAT5WR95CI = ' '
  
  WRAT5SP69 = ' '
  WRAT5SP70to79 = ' '
  WRAT5SP80to84 = ' '
  WRAT5SP85to89 = ' '
  WRAT5SP90to109 = ' '
  WRAT5SP110to115 = ' '
  WRAT5SP116to120 = ' '
  WRAT5SP121to130 = ' '
  WRAT5SP130 = ' '
  WRAT5SP95CI = ' '
  

  TOWRE2SWE69 = ' '
  TOWRE2SWE70to79 = ' '
  TOWRE2SWE80to84 = ' '
  TOWRE2SWE85to89 = ' '
  TOWRE2SWE90to109 = ' '
  TOWRE2SWE110to115 = ' '
  TOWRE2SWE116to120 = ' '
  TOWRE2SWE121to130 = ' '
  TOWRE2SWE130 = ' '
  // TOWRE2SWE95CI = ' '
  
  TOWRE2PDE69 = ' '
  TOWRE2PDE70to79 = ' '
  TOWRE2PDE80to84 = ' '
  TOWRE2PDE85to89 = ' '
  TOWRE2PDE90to109 = ' '
  TOWRE2PDE110to115 = ' '
  TOWRE2PDE116to120 = ' '
  TOWRE2PDE121to130 = ' '
  TOWRE2PDE130 = ' '
  // TOWRE2PDE95CI = ' '

  TOWRE2IND69 = ' '
  TOWRE2IND70to79 = ' '
  TOWRE2IND80to84 = ' '
  TOWRE2IND85to89 = ' '
  TOWRE2IND90to109 = ' '
  TOWRE2IND110to115 = ' '
  TOWRE2IND116to120 = ' '
  TOWRE2IND121to130 = ' '
  TOWRE2IND130 = ' '
  TOWRE2IND95CI = ' '

  
  ART2SC69 = ' '
  ART2SC70to79 = ' '
  ART2SC80to84 = ' '
  ART2SC85to89 = ' '
  ART2SC90to109 = ' '
  ART2SC110to115 = ' '
  ART2SC116to120 = ' '
  ART2SC121to130 = ' '
  ART2SC130 = ' '
  // ART2SC95CI = ' '

  ART2RA = ' '
  ART2SR = ' '
  ART2HW = ' '
  ART2TY = ' '

}

function getPercentage(val: string): string {
  
  return `${Math.round(Number(val)/140 * 100)}%`;

}

