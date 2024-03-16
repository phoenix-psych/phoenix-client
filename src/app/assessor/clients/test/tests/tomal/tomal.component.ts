
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forEach, keys } from 'lodash';
import { TomalIndex } from 'src/app/models/common/tomal-index';
import { TomalSubTest } from 'src/app/models/common/tomal-subtest';
import { NotifyService } from 'src/app/shared/notify.service';
import { environment } from 'src/environments/environment';

interface Tomal 
{
  selected : string;

  mfsVerbalRawScore :number;
  mfsVerbalScaleScore :number;
  mfsVerbalPercentageRank :number;
  fmNonVerbalRawScore :number;
  fmNonVerbalScaleScore :number;
  fmNonVerbalPercentageRank :number;
  wsrVerbalRawScore :number;
  wsrVerbalScaleScore :number;
  wsrVerbalPercentageRank :number;
  avmNonVerbalRawScore :number;
  avmNonVerbalScaleScore :number;
  avmNonVerbalPercentageRank :number;
  orVerbalRawScore :number;
  orVerbalScaleScore :number;
  orVerbalPercentageRank :number;
  vsmNonVerbalRawScore :number;
  vsmNonVerbalScaleScore :number;
  vsmNonVerbalPercentageRank :number;
  prVerbalRawScore :number;
  prVerbalScaleScore :number;
  prVerbalPercentageRank :number;
  mflNonVerbalRawScore :number;
  mflNonVerbalScaleScore :number;
  mflNonVerbalPercentageRank :number;
  ofVerbalRawScore :number;
  ofVerbalScaleScore :number;
  ofVerbalPercentageRank :number;
  vsrNonVerbalRawScore :number;
  vsrNonVerbalScaleScore :number;
  vsrNonVerbalPercentageRank :number;
  lfVerbalRawScore :number;
  lfVerbalScaleScore :number;
  lfVerbalPercentageRank :number;
  mlNonVerbalRawScore :number;
  mlNonVerbalScaleScore :number;
  mlNonVerbalPercentageRank :number;
  dbVerbalRawScore :number;
  dbVerbalScaleScore :number;
  dbVerbalPercentageRank :number;
  lbVerbalRawScore :number;
  lbVerbalScaleScore :number;
  lbVerbalPercentageRank :number;
  mfsdVerbalRawScore :number;
  mfsdVerbalScaleScore :number;
  mfsdVerbalPercentageRank :number;
  wsrdVerbalRawScore :number;
  wsrdVerbalScaleScore :number;
  wsrdVerbalPercentageRank :number;

  mfsVmi :number;
  mfsCmi :number;
  mfsAri :number;
  fmNmi :number;
  fmCmi :number;
  fmFri :number;
  wsrVmi :number;
  wsrCmi :number;
  wsrLi :number;
  avmNmi :number;
  avmCmi :number;
  avmFri :number;
  orVmi :number;
  orCmi :number;
  orLi :number;
  vsmNmi :number;
  vsmCmi :number;
  vsmSri :number;
  prVmi :number;
  prCmi :number;
  prAri :number;
  prLi :number;
  mflNmi :number;
  mflCmi :number;
  mflFri :number;
  dfAci :number;
  dfSri :number;
  vsrLi :number;
  lfAci :number;
  lfSri :number;
  miAci :number;
  miSri :number;
  dbAci :number;
  lbAci :number;
  mfsdVdri :number;
  wsrdVdri :number;
  
  smVmi :number;
  smNmi :number;
  smCmi :number;
  smVdri :number;
  smAci :number;
  smSri :number;
  smFri :number;
  smAri :number;
  smli :number;

  indVmi :number;
  indNmi :number;
  indCmi :number;
  indVdri :number;
  indAci :number;
  indSri :number;
  indFri :number;
  indAri :number;
  indli :number;

  perVmi :string;
  perNmi :string;
  perCmi :string;
  perVdri :string;
  perAci :string;
  perSri :string;
  perFri :string;
  perAri :string;
  perli :string;

}

@Component({
  selector: 'app-tomal',
  templateUrl: './tomal.component.html',
  styleUrls: ['./tomal.component.scss']
})
export class TomalComponent implements OnInit {

  private baseUrl:string = environment.baseApiUrl;
  form!:FormGroup;
  confidenceIntervals: Array<any> = [
    { Name:"68% level of confidence",Value:"1" },
    { Name:"85% level of confidence",Value:"1.44" },
    { Name:"90% level of confidence",Value:"1.65" },
    { Name:"95% level of confidence",Value:"1.96" },
    { Name:"99% level of confidence",Value:"2.58" }
  ];
  selected : string = ''
  hidden : boolean = true

  //#region  table1
  mfsVerbalRawScore !:string
  mfsVerbalScaleScore !:string
  mfsVerbalPercentageRank :string = '0'
  // mfsNonVerbalRawScore !:string
  // mfsNonVerbalScaleScore !:string
  // mfsNonVerbalPercentageRank :string = '0'
  
  // fmVerbalRawScore !:string
  // fmVerbalScaleScore !:string
  // fmVerbalPercentageRank :string = '0'
  fmNonVerbalRawScore !:string
  fmNonVerbalScaleScore !:string
  fmNonVerbalPercentageRank :string = '0'
  
  
  wsrVerbalRawScore !:string
  wsrVerbalScaleScore !:string
  wsrVerbalPercentageRank :string = '0'
  // wsrNonVerbalRawScore !:string
  // wsrNonVerbalScaleScore !:string
  // wsrNonVerbalPercentageRank :string = '0'
  
  
  // avmVerbalRawScore !:string
  // avmVerbalScaleScore !:string
  // avmVerbalPercentageRank :string = '0'
  avmNonVerbalRawScore !:string
  avmNonVerbalScaleScore !:string
  avmNonVerbalPercentageRank :string = '0'
  
  orVerbalRawScore !:string
  orVerbalScaleScore !:string
  orVerbalPercentageRank :string = '0'
  // orNonVerbalRawScore !:string
  // orNonVerbalScaleScore !:string
  // orNonVerbalPercentageRank :string = '0'
  
  // vsmVerbalRawScore !:string
  // vsmVerbalScaleScore !:string
  // vsmVerbalPercentageRank :string = '0'
  vsmNonVerbalRawScore !:string
  vsmNonVerbalScaleScore !:string
  vsmNonVerbalPercentageRank :string = '0'
  
  prVerbalRawScore !:string
  prVerbalScaleScore !:string
  prVerbalPercentageRank :string = '0'
  // prNonVerbalRawScore !:string
  // prNonVerbalScaleScore !:string
  // prNonVerbalPercentageRank :string = '0'
  
  // mflVerbalRawScore !:string
  // mflVerbalScaleScore !:string
  // mflVerbalPercentageRank :string = '0'
  mflNonVerbalRawScore !:string
  mflNonVerbalScaleScore !:string
  mflNonVerbalPercentageRank :string = '0'
  
  ofVerbalRawScore !:string
  ofVerbalScaleScore !:string
  ofVerbalPercentageRank :string = '0'
  // ofNonVerbalRawScore !:string
  // ofNonVerbalScaleScore !:string
  // ofNonVerbalPercentageRank :string = '0'
  
  // vsrVerbalRawScore !:string
  // vsrVerbalScaleScore !:string
  // vsrVerbalPercentageRank :string = '0'
  vsrNonVerbalRawScore !:string
  vsrNonVerbalScaleScore !:string
  vsrNonVerbalPercentageRank :string = '0'
  
  lfVerbalRawScore !:string
  lfVerbalScaleScore !:string
  lfVerbalPercentageRank :string = '0'
  // lfNonVerbalRawScore !:string
  // lfNonVerbalScaleScore !:string
  // lfNonVerbalPercentageRank :string = '0'
  
  // mlVerbalRawScore !:string
  // mlVerbalScaleScore !:string
  // mlVerbalPercentageRank :string = '0'
  mlNonVerbalRawScore !:string
  mlNonVerbalScaleScore !:string
  mlNonVerbalPercentageRank :string = '0'
  
  dbVerbalRawScore !:string
  dbVerbalScaleScore !:string
  dbVerbalPercentageRank :string = '0'
  // dbNonVerbalRawScore !:string
  // dbNonVerbalScaleScore !:string
  // dbNonVerbalPercentageRank :string = '0'
  
  lbVerbalRawScore !:string
  lbVerbalScaleScore !:string
  lbVerbalPercentageRank :string = '0'
  // lbNonVerbalRawScore !:string
  // lbNonVerbalScaleScore !:string
  // lbNonVerbalPercentageRank :string = '0'
  
  mfsdVerbalRawScore !:string
  mfsdVerbalScaleScore !:string
  mfsdVerbalPercentageRank :string = '0'
  // mfsdNonVerbalRawScore !:string
  // mfsdNonVerbalScaleScore !:string
  // mfsdNonVerbalPercentageRank :string = '0'
  
  wsrdVerbalRawScore !:string
  wsrdVerbalScaleScore !:string
  wsrdVerbalPercentageRank :string = '0'
  // wsrdNonVerbalRawScore !:string
  // wsrdNonVerbalScaleScore !:string
  // wsrdNonVerbalPercentageRank :string = '0'

  //#endregion

  //#region  table2
  mfsVmi !:string
  mfsCmi !:string
  mfsAri !:string
  fmNmi !:string
  fmCmi !:string
  fmFri !:string
  wsrVmi !:string
  wsrCmi !:string
  wsrLi !:string
  avmNmi !:string
  avmCmi !:string
  avmFri !:string
  orVmi !:string
  orCmi !:string
  orLi !:string
  vsmNmi !:string
  vsmCmi !:string
  vsmSri !:string
  prVmi !:string
  prCmi !:string
  prAri !:string
  prLi !:string
  mflNmi !:string
  mflCmi !:string
  mflFri !:string
  dfAci !:string
  dfSri !:string
  vsrLi !:string
  lfAci !:string
  lfSri !:string
  miAci !:string
  miSri !:string
  dbAci !:string
  lbAci !:string
  mfsdVdri !:string
  wsrdVdri !:string
  
  smVmi !:string
  smNmi !:string
  smCmi !:string
  smVdri !:string
  smAci !:string
  smSri !:string
  smFri !:string
  smAri !:string
  smli !:string

  indVmi !:string
  indNmi !:string
  indCmi !:string
  indVdri !:string
  indAci !:string
  indSri !:string
  indFri !:string
  indAri !:string
  indli !:string

  perVmi !:string
  perNmi !:string
  perCmi !:string
  perVdri !:string
  perAci !:string
  perSri !:string
  perFri !:string
  perAri !:string
  perli !:string

  //#endregion

  //#region Table3

  mfs20 !:string
  wsr20 !:string
  or20 !:string
  pr20 !:string
  df20 !:string
  lf20 !:string
  db20 !:string
  lb20 !:string
  /////////////
  fm20 !:string
  avm20 !:string
  vsm20 !:string
  mfl20 !:string
  vsr20 !:string
  mi20 !:string
  /////////////
  vmi20 !:string
  nmi20 !:string
  cmi20 !:string
  vdri20 !:string
  aci20 !:string
  sri20 !:string
  fri20 !:string
  ari20 !:string
  li20 !:string

  mfs19 !:string
  wsr19 !:string
  or19 !:string
  pr19 !:string
  df19 !:string
  lf19 !:string
  db19 !:string
  lb19 !:string
  /////////////
  fm19 !:string
  avm19 !:string
  vsm19 !:string
  mfl19 !:string
  vsr19 !:string
  mi19 !:string
  /////////////
  vmi19 !:string
  nmi19 !:string
  cmi19 !:string
  vdri19 !:string
  aci19 !:string
  sri19 !:string
  fri19 !:string
  ari19 !:string
  li19 !:string

  mfs18 !:string
  wsr18 !:string
  or18 !:string
  pr18 !:string
  df18 !:string
  lf18 !:string
  db18 !:string
  lb18 !:string
  /////////////
  fm18 !:string
  avm18 !:string
  vsm18 !:string
  mfl18 !:string
  vsr18 !:string
  mi18 !:string
  /////////////
  vmi18 !:string
  nmi18 !:string
  cmi18 !:string
  vdri18 !:string
  aci18 !:string
  sri18 !:string
  fri18 !:string
  ari18 !:string
  li18 !:string

  mfs17 !:string
  wsr17 !:string
  or17 !:string
  pr17 !:string
  df17 !:string
  lf17 !:string
  db17 !:string
  lb17 !:string
  /////////////
  fm17 !:string
  avm17 !:string
  vsm17 !:string
  mfl17 !:string
  vsr17 !:string
  mi17 !:string
  /////////////
  vmi17 !:string
  nmi17 !:string
  cmi17 !:string
  vdri17 !:string
  aci17 !:string
  sri17 !:string
  fri17 !:string
  ari17 !:string
  li17 !:string

  mfs16 !:string
  wsr16 !:string
  or16 !:string
  pr16 !:string
  df16 !:string
  lf16 !:string
  db16 !:string
  lb16 !:string
  /////////////
  fm16 !:string
  avm16 !:string
  vsm16 !:string
  mfl16 !:string
  vsr16 !:string
  mi16 !:string
  /////////////
  vmi16 !:string
  nmi16 !:string
  cmi16 !:string
  vdri16 !:string
  aci16 !:string
  sri16 !:string
  fri16 !:string
  ari16 !:string
  li16 !:string

  mfs15 !:string
  wsr15 !:string
  or15 !:string
  pr15 !:string
  df15 !:string
  lf15 !:string
  db15 !:string
  lb15 !:string
  /////////////
  fm15 !:string
  avm15 !:string
  vsm15 !:string
  mfl15 !:string
  vsr15 !:string
  mi15 !:string
  /////////////
  vmi15 !:string
  nmi15 !:string
  cmi15 !:string
  vdri15 !:string
  aci15 !:string
  sri15 !:string
  fri15 !:string
  ari15 !:string
  li15 !:string

  mfs14 !:string
  wsr14 !:string
  or14 !:string
  pr14 !:string
  df14 !:string
  lf14 !:string
  db14 !:string
  lb14 !:string
  /////////////
  fm14 !:string
  avm14 !:string
  vsm14 !:string
  mfl14 !:string
  vsr14 !:string
  mi14 !:string
  /////////////
  vmi14 !:string
  nmi14 !:string
  cmi14 !:string
  vdri14 !:string
  aci14 !:string
  sri14 !:string
  fri14 !:string
  ari14 !:string
  li14 !:string

  mfs13 !:string
  wsr13 !:string
  or13 !:string
  pr13 !:string
  df13 !:string
  lf13 !:string
  db13 !:string
  lb13 !:string
  /////////////
  fm13 !:string
  avm13 !:string
  vsm13 !:string
  mfl13 !:string
  vsr13 !:string
  mi13 !:string
  /////////////
  vmi13 !:string
  nmi13 !:string
  cmi13 !:string
  vdri13 !:string
  aci13 !:string
  sri13 !:string
  fri13 !:string
  ari13 !:string
  li13 !:string

  mfs12 !:string
  wsr12 !:string
  or12 !:string
  pr12 !:string
  df12 !:string
  lf12 !:string
  db12 !:string
  lb12 !:string
  /////////////
  fm12 !:string
  avm12 !:string
  vsm12 !:string
  mfl12 !:string
  vsr12 !:string
  mi12 !:string
  /////////////
  vmi12 !:string
  nmi12 !:string
  cmi12 !:string
  vdri12 !:string
  aci12 !:string
  sri12 !:string
  fri12 !:string
  ari12 !:string
  li12 !:string

  mfs11 !:string
  wsr11 !:string
  or11 !:string
  pr11 !:string
  df11 !:string
  lf11 !:string
  db11 !:string
  lb11 !:string
  /////////////
  fm11 !:string
  avm11 !:string
  vsm11 !:string
  mfl11 !:string
  vsr11 !:string
  mi11 !:string
  /////////////
  vmi11 !:string
  nmi11 !:string
  cmi11 !:string
  vdri11 !:string
  aci11 !:string
  sri11 !:string
  fri11 !:string
  ari11 !:string
  li11 !:string

  mfs10 !:string
  wsr10 !:string
  or10 !:string
  pr10 !:string
  df10 !:string
  lf10 !:string
  db10 !:string
  lb10 !:string
  /////////////
  fm10 !:string
  avm10 !:string
  vsm10 !:string
  mfl10 !:string
  vsr10 !:string
  mi10 !:string
  /////////////
  vmi10 !:string
  nmi10 !:string
  cmi10 !:string
  vdri10 !:string
  aci10 !:string
  sri10 !:string
  fri10 !:string
  ari10 !:string
  li10 !:string

  mfs9 !:string
  wsr9 !:string
  or9 !:string
  pr9 !:string
  df9 !:string
  lf9 !:string
  db9 !:string
  lb9 !:string
  /////////////
  fm9 !:string
  avm9 !:string
  vsm9 !:string
  mfl9 !:string
  vsr9 !:string
  mi9 !:string
  /////////////
  vmi9 !:string
  nmi9 !:string
  cmi9 !:string
  vdri9 !:string
  aci9 !:string
  sri9 !:string
  fri9 !:string
  ari9 !:string
  li9 !:string

  mfs8 !:string
  wsr8 !:string
  or8 !:string
  pr8 !:string
  df8 !:string
  lf8 !:string
  db8 !:string
  lb8 !:string
  /////////////
  fm8 !:string
  avm8 !:string
  vsm8 !:string
  mfl8 !:string
  vsr8 !:string
  mi8 !:string
  /////////////
  vmi8 !:string
  nmi8 !:string
  cmi8 !:string
  vdri8 !:string
  aci8 !:string
  sri8 !:string
  fri8 !:string
  ari8 !:string
  li8 !:string

  mfs7 !:string
  wsr7 !:string
  or7 !:string
  pr7 !:string
  df7 !:string
  lf7 !:string
  db7 !:string
  lb7 !:string
  /////////////
  fm7 !:string
  avm7 !:string
  vsm7 !:string
  mfl7 !:string
  vsr7 !:string
  mi7 !:string
  /////////////
  vmi7 !:string
  nmi7 !:string
  cmi7 !:string
  vdri7 !:string
  aci7 !:string
  sri7 !:string
  fri7 !:string
  ari7 !:string
  li7 !:string

  mfs6 !:string
  wsr6 !:string
  or6 !:string
  pr6 !:string
  df6 !:string
  lf6 !:string
  db6 !:string
  lb6 !:string
  /////////////
  fm6 !:string
  avm6 !:string
  vsm6 !:string
  mfl6 !:string
  vsr6 !:string
  mi6 !:string
  /////////////
  vmi6 !:string
  nmi6 !:string
  cmi6 !:string
  vdri6 !:string
  aci6 !:string
  sri6 !:string
  fri6 !:string
  ari6 !:string
  li6 !:string

  mfs5 !:string
  wsr5 !:string
  or5 !:string
  pr5 !:string
  df5 !:string
  lf5 !:string
  db5 !:string
  lb5 !:string
  /////////////
  fm5 !:string
  avm5 !:string
  vsm5 !:string
  mfl5 !:string
  vsr5 !:string
  mi5 !:string
  /////////////
  vmi5 !:string
  nmi5 !:string
  cmi5 !:string
  vdri5 !:string
  aci5 !:string
  sri5 !:string
  fri5 !:string
  ari5 !:string
  li5 !:string

  mfs4 !:string
  wsr4 !:string
  or4 !:string
  pr4 !:string
  df4 !:string
  lf4 !:string
  db4 !:string
  lb4 !:string
  /////////////
  fm4 !:string
  avm4 !:string
  vsm4 !:string
  mfl4 !:string
  vsr4 !:string
  mi4 !:string
  /////////////
  vmi4 !:string
  nmi4 !:string
  cmi4 !:string
  vdri4 !:string
  aci4 !:string
  sri4 !:string
  fri4 !:string
  ari4 !:string
  li4 !:string

  mfs3 !:string
  wsr3 !:string
  or3 !:string
  pr3 !:string
  df3 !:string
  lf3 !:string
  db3 !:string
  lb3 !:string
  /////////////
  fm3 !:string
  avm3 !:string
  vsm3 !:string
  mfl3 !:string
  vsr3 !:string
  mi3 !:string
  /////////////
  vmi3 !:string
  nmi3 !:string
  cmi3 !:string
  vdri3 !:string
  aci3 !:string
  sri3 !:string
  fri3 !:string
  ari3 !:string
  li3 !:string

  mfs2 !:string
  wsr2 !:string
  or2 !:string
  pr2 !:string
  df2 !:string
  lf2 !:string
  db2 !:string
  lb2 !:string
  /////////////
  fm2 !:string
  avm2 !:string
  vsm2 !:string
  mfl2 !:string
  vsr2 !:string
  mi2 !:string
  /////////////
  vmi2 !:string
  nmi2 !:string
  cmi2 !:string
  vdri2 !:string
  aci2 !:string
  sri2 !:string
  fri2 !:string
  ari2 !:string
  li2 !:string

  mfs1 !:string
  wsr1 !:string
  or1 !:string
  pr1 !:string
  df1 !:string
  lf1 !:string
  db1 !:string
  lb1 !:string
  /////////////
  fm1 !:string
  avm1 !:string
  vsm1 !:string
  mfl1 !:string
  vsr1 !:string
  mi1 !:string
  /////////////
  vmi1 !:string
  nmi1 !:string
  cmi1 !:string
  vdri1 !:string
  aci1 !:string
  sri1 !:string
  fri1 !:string
  ari1 !:string
  li1 !:string 

  //#endregion

  //#region 

  colorGrey : string = 'grey'
  colorBlack : string = 'black'
  colorGreen : string = 'green'

  //#endregion

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private notificationService: NotifyService) { }

  onDOBChange() {
    if (this.form.get('dob')?.value)
    {
        let bdate = new Date(this.form.get('dob')?.value);
        let timeDiff = Math.abs(Date.now() - bdate.getTime());
        let ageYear = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        let ageMonth = Math.floor(timeDiff / (1000 * 3600 * 24) % 365.25 / 31);
        this.form.patchValue({
          ageYear: ageYear,
          ageMonth: ageMonth,
        });
    }
  }
  onSelectionchanged() {

    let dynamicKey = "li1";
    Reflect.set(this, dynamicKey, "red");
    dynamicKey = "ari1";
    Reflect.set(this, dynamicKey, "blue");

    this.hidden = false;
    var c = this.colorGreen;
    this.mfs9 = '';
    this.wsr8 = c;
    this.or20 = '';
    this.pr20 = '';
    this.df19 = '';
    this.lf18 = '';
    this.db17 = '';
    this.lb16 = c;
    this.fm15 = c;
    this.avm14 = c;
    this.vsm13 = c;
    this.mfl12 = c;
    this.vsr1 = c;
    this.mi2 = c;
    this.vmi3 = c;
    this.nmi4 = c;
    this.cmi5 = c;
    this.vdri6 = c;
    this.aci7 = c;
    this.sri8 = c;
    this.fri9 = c;
    this.ari10 = c;
    this.li11 = c;
  }

  @Input() clientId = '';
  @Input() name = '';
  @Input() dob = new Date();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      ageYear: [''],
      ageMonth: [''],
    });

    this.form.patchValue({
      name: this.name,
      dob: this.dob
    });

    this.onDOBChange();
  }

  onLoad(){
    this.LoadClient(this.clientId);
  }

  getRawScore(type : string) {

    if(type == 'mfs')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<TomalSubTest>(this.baseUrl + 'assessor/tomal?type='+ type +'&score='+ this.mfsVerbalRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.scaleScore){
            this.mfsVerbalScaleScore = x.scaleScore.toString();
          }

          if(x.percentageRank){
            this.mfsVerbalPercentageRank = x.percentageRank
          }

          this.Generate();
          this.notificationService.success('MFS RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    if(type == 'fm')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<TomalSubTest>(this.baseUrl + 'assessor/tomal?type='+ type +'&score='+ this.fmNonVerbalRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.scaleScore){
            this.fmNonVerbalScaleScore = x.scaleScore.toString();
          }

          if(x.percentageRank){
            this.fmNonVerbalPercentageRank = x.percentageRank
          }

          this.Generate();
          this.notificationService.success('fm RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    if(type == 'wsr')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<TomalSubTest>(this.baseUrl + 'assessor/tomal?type='+ type +'&score='+ this.wsrVerbalRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.scaleScore){
            this.wsrVerbalScaleScore = x.scaleScore.toString();
          }

          if(x.percentageRank){
            this.wsrVerbalPercentageRank = x.percentageRank
          }

          this.Generate();
          this.notificationService.success('wsr RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    if(type == 'avm')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<TomalSubTest>(this.baseUrl + 'assessor/tomal?type='+ type +'&score='+ this.avmNonVerbalRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.scaleScore){
            this.avmNonVerbalScaleScore = x.scaleScore.toString();
          }

          if(x.percentageRank){
            this.avmNonVerbalPercentageRank = x.percentageRank
          }

          this.Generate();
          this.notificationService.success('avm RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    if(type == 'or')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<TomalSubTest>(this.baseUrl + 'assessor/tomal?type='+ type +'&score='+ this.orVerbalRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.scaleScore){
            this.orVerbalScaleScore = x.scaleScore.toString();
          }

          if(x.percentageRank){
            this.orVerbalPercentageRank = x.percentageRank
          }

          this.Generate();
          this.notificationService.success('or RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    if(type == 'vsm')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<TomalSubTest>(this.baseUrl + 'assessor/tomal?type='+ type +'&score='+ this.vsmNonVerbalRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.scaleScore){
            this.vsmNonVerbalScaleScore = x.scaleScore.toString();
          }

          if(x.percentageRank){
            this.vsmNonVerbalPercentageRank = x.percentageRank
          }

          this.Generate();
          this.notificationService.success('vsm RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    if(type == 'pr')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<TomalSubTest>(this.baseUrl + 'assessor/tomal?type='+ type +'&score='+ this.prVerbalRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.scaleScore){
            this.prVerbalScaleScore = x.scaleScore.toString();
          }

          if(x.percentageRank){
            this.prVerbalPercentageRank = x.percentageRank
          }

          this.Generate();
          this.notificationService.success('pr RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    if(type == 'mfl')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<TomalSubTest>(this.baseUrl + 'assessor/tomal?type='+ type +'&score='+ this.mflNonVerbalRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.scaleScore){
            this.mflNonVerbalScaleScore = x.scaleScore.toString();
          }

          if(x.percentageRank){
            this.mflNonVerbalPercentageRank = x.percentageRank
          }

          this.Generate();
          this.notificationService.success('mfl RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    if(type == 'of')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<TomalSubTest>(this.baseUrl + 'assessor/tomal?type='+ type +'&score='+ this.ofVerbalRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.scaleScore){
            this.ofVerbalScaleScore = x.scaleScore.toString();
          }

          if(x.percentageRank){
            this.ofVerbalPercentageRank = x.percentageRank
          }

          this.Generate();
          this.notificationService.success('of RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    if(type == 'vsr')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<TomalSubTest>(this.baseUrl + 'assessor/tomal?type='+ type +'&score='+ this.vsrNonVerbalRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.scaleScore){
            this.vsrNonVerbalScaleScore = x.scaleScore.toString();
          }

          if(x.percentageRank){
            this.vsrNonVerbalPercentageRank = x.percentageRank
          }

          this.Generate();
          this.notificationService.success('vsr RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    if(type == 'lf')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<TomalSubTest>(this.baseUrl + 'assessor/tomal?type='+ type +'&score='+ this.lfVerbalRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.scaleScore){
            this.lfVerbalScaleScore = x.scaleScore.toString();
          }

          if(x.percentageRank){
            this.lfVerbalPercentageRank = x.percentageRank
          }

          this.Generate();
          this.notificationService.success('lf RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    if(type == 'ml')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<TomalSubTest>(this.baseUrl + 'assessor/tomal?type='+ type +'&score='+ this.mlNonVerbalRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.scaleScore){
            this.mlNonVerbalScaleScore = x.scaleScore.toString();
          }

          if(x.percentageRank){
            this.mlNonVerbalPercentageRank = x.percentageRank
          }

          this.Generate();
          this.notificationService.success('ml RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    if(type == 'db')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<TomalSubTest>(this.baseUrl + 'assessor/tomal?type='+ type +'&score='+ this.dbVerbalRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.scaleScore){
            this.dbVerbalScaleScore = x.scaleScore.toString();
          }

          if(x.percentageRank){
            this.dbVerbalPercentageRank = x.percentageRank
          }

          this.Generate();
          this.notificationService.success('db RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    if(type == 'lb')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<TomalSubTest>(this.baseUrl + 'assessor/tomal?type='+ type +'&score='+ this.lbVerbalRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.scaleScore){
            this.lbVerbalScaleScore = x.scaleScore.toString();
          }

          if(x.percentageRank){
            this.lbVerbalPercentageRank = x.percentageRank
          }

          this.Generate();
          this.notificationService.success('lb RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    if(type == 'mfsd')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<TomalSubTest>(this.baseUrl + 'assessor/tomal?type='+ type +'&score='+ this.mfsdVerbalRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.scaleScore){
            this.mfsdVerbalScaleScore = x.scaleScore.toString();
          }

          if(x.percentageRank){
            this.mfsdVerbalPercentageRank = x.percentageRank
          }

          this.Generate();
          this.notificationService.success('mfsd RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    if(type == 'wsrd')
    {
      let year = this.form.get('ageYear')?.value;
      let month = this.form.get('ageMonth')?.value;

      this.http.get<TomalSubTest>(this.baseUrl + 'assessor/tomal?type='+ type +'&score='+ this.wsrdVerbalRawScore + '&year='+ year + '&month='+ month + '', this.setHeader()).subscribe({
        next: (x) =>{
          if(x.scaleScore){
            this.wsrdVerbalScaleScore = x.scaleScore.toString();
          }

          if(x.percentageRank){
            this.wsrdVerbalPercentageRank = x.percentageRank
          }

          this.Generate();
          this.notificationService.success('wsrd RawScore Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
    }
    
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

  sum(v1 : string, v2 : string, v3 : string= '0',v4 : string = '0',v5 : string = '0',v6 : string = '0',v7 : string = '0',v8 : string = '0'){
    if(Number.isNaN(v1) || v1 == undefined)
      v1 = '0';
    if(Number.isNaN(v2) || v2 == undefined)
      v2 = '0';
    if(Number.isNaN(v3) || v3 == undefined)
      v3 = '0';
    if(Number.isNaN(v4) || v4 == undefined)
      v4 = '0';
    if(Number.isNaN(v5) || v5 == undefined)
      v5 = '0';
    if(Number.isNaN(v6) || v6 == undefined)
      v6 = '0';
    if(Number.isNaN(v7) || v7 == undefined)
      v7 = '0';
    if(Number.isNaN(v8) || v8 == undefined)
      v8 = '0';
    return Math.floor(Number(v1) + Number(v2)+ Number(v3)+ Number(v4) + Number(v5) + Number(v6)+ Number(v7)+ Number(v8));
  }

  getMedian(no : string, div : number){
    return Math.floor(Number(no) / div);
  }

  CheckNAN(x : any){
    if(x == undefined || Number.isNaN(x))
    {
      return '';
    }

    return x.toString();
  }

  getStandardScore(score : string){
    if(score == undefined || Number.isNaN(score))
    {
      return '';
    }

    return Math.floor(Number(score) * 5 + 50).toString();
  }

    Generate(hide : boolean = true){
      this.hidden = hide;
    if(this.hidden == false)
    {

      //#region 

      this.mfsVmi = this.mfsCmi = this.mfsAri = this.mfsVerbalScaleScore;
      this.wsrVmi = this.wsrCmi = this.wsrLi = this.wsrVerbalScaleScore;
      this.orVmi = this.orCmi = this.orLi = this.orVerbalScaleScore;
      this.prVmi = this.prCmi = this.prAri = this.prLi = this.prVerbalScaleScore;
      this.fmNmi = this.fmCmi = this.fmFri  = this.fmNonVerbalScaleScore;
      this.avmNmi = this.avmCmi = this.avmFri = this.avmNonVerbalScaleScore;
      this.vsmNmi = this.vsmCmi = this.vsmSri = this.vsmNonVerbalScaleScore;
      this.mflNmi = this.mflCmi = this.mflFri = this.mflNonVerbalScaleScore;
      this.dfAci = this.dfSri = this.ofVerbalScaleScore;
      this.lfAci = this.lfSri  = this.lfVerbalScaleScore;
      this.miAci = this.miSri = this.mlNonVerbalScaleScore;
      this.mfsdVdri = this.mfsdVerbalScaleScore;
      this.wsrdVdri = this.wsrdVerbalScaleScore;
      this.dbAci = this.dbVerbalScaleScore;
      this.lbAci = this.lbVerbalScaleScore;
      this.vsrLi = this.vsrNonVerbalScaleScore;

      //#endregion
      
      //#region Sum &
      
      let sm = 0,cnt = 0,d = '';
      if(Number(this.mfsVmi) > 0)
      {
        cnt++;
        sm += Number(this.mfsVmi);
      }
      else
      {
        d = `${d},mfsVmi`;
      }
      if(Number(this.wsrVmi) > 0)
      {
        cnt++;
        sm += Number(this.wsrVmi);
      }
      else
      {
        d = `${d},wsrVmi`;
      }
      if(Number(this.orVmi) > 0)
      {
        cnt++;
        sm += Number(this.orVmi);
      }
      else
      {
        d = `${d},orVmi`;
      }
      if(Number(this.prVmi) > 0)
      {
        cnt++;
        sm += Number(this.prVmi);
      }
      else
      {
        d = `${d},prVmi`;
      }

      let avg = sm / cnt;
      d.split(',').forEach((x)=> {
        Reflect.set(this, x, this.CheckNAN(Math.round(avg)));
      });
      this.smVmi = this.CheckNAN(this.sum(this.mfsVmi,this.wsrVmi,this.orVmi,this.prVmi));

    
      sm = 0,cnt = 0,d = '';
      if(Number(this.fmNmi) > 0)
      {
        cnt++;
        sm += Number(this.fmNmi);
      }
      else
      {
        d = `${d},fmNmi`;
      }
      if(Number(this.avmNmi) > 0)
      {
        cnt++;
        sm += Number(this.avmNmi);
      }
      else
      {
        d = `${d},avmNmi`;
      }
      if(Number(this.vsmNmi) > 0)
      {
        cnt++;
        sm += Number(this.vsmNmi);
      }
      else
      {
        d = `${d},vsmNmi`;
      }
      if(Number(this.mflNmi) > 0)
      {
        cnt++;
        sm += Number(this.mflNmi);
      }
      else
      {
        d = `${d},mflNmi`;
      }

      avg = sm / cnt;
      d.split(',').forEach((x)=> {
        Reflect.set(this, x, this.CheckNAN(Math.round(avg)));
      });
      this.smNmi = this.CheckNAN(this.sum(this.fmNmi,this.avmNmi,this.vsmNmi,this.mflNmi));

      sm = 0,cnt = 0,d = '';
      if(Number(this.mfsCmi) > 0)
      {
        cnt++;
        sm += Number(this.mfsCmi);
      }
      else
      {
        d = `${d},mfsCmi`;
      }
      if(Number(this.fmCmi) > 0)
      {
        cnt++;
        sm += Number(this.fmCmi);
      }
      else
      {
        d = `${d},fmCmi`;
      }
      if(Number(this.wsrCmi) > 0)
      {
        cnt++;
        sm += Number(this.wsrCmi);
      }
      else
      {
        d = `${d},wsrCmi`;
      }
      if(Number(this.avmCmi) > 0)
      {
        cnt++;
        sm += Number(this.avmCmi);
      }
      else
      {
        d = `${d},avmCmi`;
      }
      if(Number(this.orCmi) > 0)
      {
        cnt++;
        sm += Number(this.orCmi);
      }
      else
      {
        d = `${d},orCmi`;
      }
      if(Number(this.vsmCmi) > 0)
      {
        cnt++;
        sm += Number(this.vsmCmi);
      }
      else
      {
        d = `${d},vsmCmi`;
      }
      if(Number(this.prCmi) > 0)
      {
        cnt++;
        sm += Number(this.prCmi);
      }
      else
      {
        d = `${d},prCmi`;
      }
      if(Number(this.mflCmi) > 0)
      {
        cnt++;
        sm += Number(this.mflCmi);
      }
      else
      {
        d = `${d},mflCmi`;
      }

      avg = sm / cnt;
      d.split(',').forEach((x)=> {
        Reflect.set(this, x, this.CheckNAN(Math.round(avg)));
      });
      this.smCmi = this.CheckNAN(this.sum(this.mfsCmi,this.fmCmi,this.wsrCmi,this.avmCmi,this.orCmi,this.vsmCmi,this.prCmi,this.mflCmi));


      sm = 0,cnt = 0,d = '';
      if(Number(this.mfsdVdri) > 0)
      {
        cnt++;
        sm += Number(this.mfsdVdri);
      }
      else
      {
        d = `${d},mfsdVdri`;
      }
      if(Number(this.wsrdVdri) > 0)
      {
        cnt++;
        sm += Number(this.wsrdVdri);
      }
      else
      {
        d = `${d},wsrdVdri`;
      }
      
      avg = sm / cnt;
      d.split(',').forEach((x)=> {
        Reflect.set(this, x, this.CheckNAN(Math.round(avg)));
      });
      this.smVdri = this.CheckNAN(this.sum(this.mfsdVdri,this.wsrdVdri));


      sm = 0,cnt = 0,d = '';
      if(Number(this.dfAci) > 0)
      {
        cnt++;
        sm += Number(this.dfAci);
      }
      else
      {
        d = `${d},dfAci`;
      }
      if(Number(this.lfAci) > 0)
      {
        cnt++;
        sm += Number(this.lfAci);
      }
      else
      {
        d = `${d},lfAci`;
      }
      if(Number(this.miAci) > 0)
      {
        cnt++;
        sm += Number(this.miAci);
      }
      else
      {
        d = `${d},miAci`;
      }
      if(Number(this.dbAci) > 0)
      {
        cnt++;
        sm += Number(this.dbAci);
      }
      else
      {
        d = `${d},dbAci`;
      }
      if(Number(this.lbAci) > 0)
      {
        cnt++;
        sm += Number(this.lbAci);
      }
      else
      {
        d = `${d},lbAci`;
      }

      avg = sm / cnt;
      d.split(',').forEach((x)=> {
        Reflect.set(this, x, this.CheckNAN(Math.round(avg)));
      });
      this.smAci = this.CheckNAN(this.sum(this.dfAci,this.lfAci,this.miAci,this.dbAci,this.lbAci));


      sm = 0,cnt = 0,d = '';
      if(Number(this.vsmSri) > 0)
      {
        cnt++;
        sm += Number(this.vsmSri);
      }
      else
      {
        d = `${d},vsmSri`;
      }
      if(Number(this.dfSri) > 0)
      {
        cnt++;
        sm += Number(this.dfSri);
      }
      else
      {
        d = `${d},dfSri`;
      }
      if(Number(this.lfSri) > 0)
      {
        cnt++;
        sm += Number(this.lfSri);
      }
      else
      {
        d = `${d},lfSri`;
      }
      if(Number(this.miSri) > 0)
      {
        cnt++;
        sm += Number(this.miSri);
      }
      else
      {
        d = `${d},miSri`;
      }

      avg = sm / cnt;
      d.split(',').forEach((x)=> {
        Reflect.set(this, x, this.CheckNAN(Math.round(avg)));
      });
      this.smSri = this.CheckNAN(this.sum(this.vsmSri,this.dfSri,this.lfSri,this.miSri));


      sm = 0,cnt = 0,d = '';
      if(Number(this.fmFri) > 0)
      {
        cnt++;
        sm += Number(this.fmFri);
      }
      else
      {
        d = `${d},fmFri`;
      }
      if(Number(this.avmFri) > 0)
      {
        cnt++;
        sm += Number(this.avmFri);
      }
      else
      {
        d = `${d},avmFri`;
      }
      if(Number(this.mflFri) > 0)
      {
        cnt++;
        sm += Number(this.mflFri);
      }
      else
      {
        d = `${d},mflFri`;
      }
      
      avg = sm / cnt;
      d.split(',').forEach((x)=> {
        Reflect.set(this, x, this.CheckNAN(Math.round(avg)));
      });
      this.smFri = this.CheckNAN(this.sum(this.fmFri,this.avmFri,this.mflFri));


      sm = 0,cnt = 0,d = '';
      if(Number(this.mfsAri) > 0)
      {
        cnt++;
        sm += Number(this.mfsAri);
      }
      else
      {
        d = `${d},mfsAri`;
      }
      if(Number(this.prAri) > 0)
      {
        cnt++;
        sm += Number(this.prAri);
      }
      else
      {
        d = `${d},prAri`;
      }
      
      avg = sm / cnt;
      d.split(',').forEach((x)=> {
        Reflect.set(this, x, this.CheckNAN(Math.round(avg)));
      });
      this.smAri = this.CheckNAN(this.sum(this.mfsAri,this.prAri));


      sm = 0,cnt = 0,d = '';
      if(Number(this.wsrLi) > 0)
      {
        cnt++;
        sm += Number(this.wsrLi);
      }
      else
      {
        d = `${d},wsrLi`;
      }
      if(Number(this.orLi) > 0)
      {
        cnt++;
        sm += Number(this.orLi);
      }
      else
      {
        d = `${d},orLi`;
      }
      if(Number(this.prLi) > 0)
      {
        cnt++;
        sm += Number(this.prLi);
      }
      else
      {
        d = `${d},prLi`;
      }
      if(Number(this.vsrLi) > 0)
      {
        cnt++;
        sm += Number(this.vsrLi);
      }
      else
      {
        d = `${d},vsrLi`;
      }

      avg = sm / cnt;
      d.split(',').forEach((x)=> {
        Reflect.set(this, x, this.CheckNAN(Math.round(avg)));
      });
      this.smli = this.CheckNAN(this.sum(this.wsrLi,this.orLi,this.prLi,this.vsrLi));


      this.http.get<TomalIndex>(this.baseUrl + 'assessor/tomal/index?smVmi='+ this.smVmi +'&smNmi='+ this.smNmi 
                                                + '&smCmi='+ this.smCmi + '&smVdri='+ this.smVdri + ''
                                                + '&smAci='+ this.smAci + '&smSri='+ this.smSri + ''
                                                + '&smFri='+ this.smFri + '&smAri='+ this.smAri + ''
                                                + '&smli='+ this.smli + ''
                                                , this.setHeader()).subscribe({
        next: (x) =>{

          if(x.indVmi){ this.indVmi = x.indVmi;}
          if(x.indNmi){  this.indNmi = x.indNmi;}
          if(x.indCmi){   this.indCmi = x.indCmi;}
          if(x.indVdri){  this.indVdri = x.indVdri;}
          if(x.indAci){  this.indAci = x.indAci;}
          if(x.indSri){  this.indSri = x.indSri;}
          if(x.indFri){  this.indFri = x.indFri;}
          if(x.indAri){  this.indAri = x.indAri;}
          if(x.indli){  this.indli = x.indli;}
          
          if(x.perVmi){  this.perVmi = x.perVmi;}
          if(x.perNmi){  this.perNmi = x.perNmi;}
          if(x.perCmi){  this.perCmi = x.perCmi;}
          if(x.perVdri){  this.perVdri = x.perVdri;}
          if(x.perAci){  this.perAci = x.perAci;}
          if(x.perSri){  this.perSri = x.perSri;}
          if(x.perFri){  this.perFri = x.perFri;}
          if(x.perAri){  this.perAri = x.perAri;}
          if(x.perli){  this.perli = x.perli;}
      

          //#region  Set table 3

          this.setMfsColour(this.mfsVerbalScaleScore);
          this.setWsrColour(this.wsrVerbalScaleScore);
          this.setOrColour(this.orVerbalScaleScore);
          this.setPrColour(this.prVerbalScaleScore);
          this.setFmColour(this.fmNonVerbalScaleScore);
          this.setAvmColour(this.avmNonVerbalScaleScore);
          this.setVsmColour(this.vsmNonVerbalScaleScore);
          this.setMflColour(this.mflNonVerbalScaleScore);
          this.setDfColour(this.ofVerbalScaleScore);
          this.setLfColour(this.lfVerbalScaleScore);
          this.setMlColour(this.mlNonVerbalScaleScore);
          this.setDbColour(this.dbVerbalScaleScore);
          this.setLbColour(this.lbVerbalScaleScore);
          this.setVsrColour(this.vsrNonVerbalScaleScore);

          this.setVmiColour(this.indVmi);
          this.setNmiColour(this.indNmi);
          this.setCmiColour(this.indCmi);
          this.setVdriColour(this.indVdri);
          this.setAciColour(this.indAci);
          this.setSriColour(this.indSri);
          this.setFriColour(this.indFri);
          this.setAriColour(this.indAri);
          this.setLiColour(this.indli);

          //#endregion
          this.notificationService.success('Index Updated Successfully');
        },
        error: (msg)=> {
          console.log(msg);
        }
      });
      
      
      //#endregion

      

    }
    if(this.selected != '')
    {
      this.onSelectionchanged();
    }
  }

  setMfsColour(mfsVerbalScaleScore: string) {

    this.mfs1 = this.mfs2 = this.mfs3 = this.mfs4 = this.mfs5 = this.mfs6 = this.mfs7 = this.mfs8 = this.mfs9 = this.mfs10 = this.mfs11 = this.mfs12 = this.mfs13 = this.mfs14 
    = this.mfs15 = this.mfs16 = this.mfs17 = this.mfs18 = this.mfs19 = this.mfs20 = '';
    let dynamicKey = `mfs${mfsVerbalScaleScore}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  setWsrColour(wsrVerbalScaleScore: string) {

    this.wsr1 = this.wsr2 = this.wsr3 = this.wsr4 = this.wsr5 = this.wsr6 = this.wsr7 = this.wsr8 = this.wsr9 = this.wsr10 = this.wsr11 = this.wsr12 = this.wsr13 = this.wsr14 
    = this.wsr15 = this.wsr16 = this.wsr17 = this.wsr18 = this.wsr19 = this.wsr20 = '';
    let dynamicKey = `wsr${wsrVerbalScaleScore}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  setOrColour(orVerbalScaleScore: string) {

    this.or1 = this.or2 = this.or3 = this.or4 = this.or5 = this.or6 = this.or7 = this.or8 = this.or9 = this.or10 = this.or11 = this.or12 = this.or13 = this.or14 
    = this.or15 = this.or16 = this.or17 = this.or18 = this.or19 = this.or20 = '';
    let dynamicKey = `or${orVerbalScaleScore}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  setPrColour(prVerbalScaleScore: string) {

    this.pr1 = this.pr2 = this.pr3 = this.pr4 = this.pr5 = this.pr6 = this.pr7 = this.pr8 = this.pr9 = this.pr10 = this.pr11 = this.pr12 = this.pr13 = this.pr14 
    = this.pr15 = this.pr16 = this.pr17 = this.pr18 = this.pr19 = this.pr20 = '';
    let dynamicKey = `pr${prVerbalScaleScore}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  setFmColour(fmVerbalScaleScore: string) {

    this.fm1 = this.fm2 = this.fm3 = this.fm4 = this.fm5 = this.fm6 = this.fm7 = this.fm8 = this.fm9 = this.fm10 = this.fm11 = this.fm12 = this.fm13 = this.fm14 
    = this.fm15 = this.fm16 = this.fm17 = this.fm18 = this.fm19 = this.fm20 = '';
    let dynamicKey = `fm${fmVerbalScaleScore}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  setAvmColour(avmVerbalScaleScore: string) {

    this.avm1 = this.avm2 = this.avm3 = this.avm4 = this.avm5 = this.avm6 = this.avm7 = this.avm8 = this.avm9 = this.avm10 = this.avm11 = this.avm12 = this.avm13 = this.avm14 
    = this.avm15 = this.avm16 = this.avm17 = this.avm18 = this.avm19 = this.avm20 = '';
    let dynamicKey = `avm${avmVerbalScaleScore}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  setVsmColour(vsmVerbalScaleScore: string) {

    this.vsm1 = this.vsm2 = this.vsm3 = this.vsm4 = this.vsm5 = this.vsm6 = this.vsm7 = this.vsm8 = this.vsm9 = this.vsm10 = this.vsm11 = this.vsm12 = this.vsm13 = this.vsm14 
    = this.vsm15 = this.vsm16 = this.vsm17 = this.vsm18 = this.vsm19 = this.vsm20 = '';
    let dynamicKey = `vsm${vsmVerbalScaleScore}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  setMflColour(mflVerbalScaleScore: string) {

    this.mfl1 = this.mfl2 = this.mfl3 = this.mfl4 = this.mfl5 = this.mfl6 = this.mfl7 = this.mfl8 = this.mfl9 = this.mfl10 = this.mfl11 = this.mfl12 = this.mfl13 = this.mfl14 
    = this.mfl15 = this.mfl16 = this.mfl17 = this.mfl18 = this.mfl19 = this.mfl20 = '';
    let dynamicKey = `mfl${mflVerbalScaleScore}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  setDfColour(dfVerbalScaleScore: string) {

    this.df1 = this.df2 = this.df3 = this.df4 = this.df5 = this.df6 = this.df7 = this.df8 = this.df9 = this.df10 = this.df11 = this.df12 = this.df13 = this.df14 
    = this.df15 = this.df16 = this.df17 = this.df18 = this.df19 = this.df20 = '';
    let dynamicKey = `df${dfVerbalScaleScore}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  setLfColour(lfVerbalScaleScore: string) {

    this.lf1 = this.lf2 = this.lf3 = this.lf4 = this.lf5 = this.lf6 = this.lf7 = this.lf8 = this.lf9 = this.lf10 = this.lf11 = this.lf12 = this.lf13 = this.lf14 
    = this.lf15 = this.lf16 = this.lf17 = this.lf18 = this.lf19 = this.lf20 = '';
    let dynamicKey = `lf${lfVerbalScaleScore}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  setMlColour(miVerbalScaleScore: string) {

    this.mi1 = this.mi2 = this.mi3 = this.mi4 = this.mi5 = this.mi6 = this.mi7 = this.mi8 = this.mi9 = this.mi10 = this.mi11 = this.mi12 = this.mi13 = this.mi14 
    = this.mi15 = this.mi16 = this.mi17 = this.mi18 = this.mi19 = this.mi20 = '';
    let dynamicKey = `mi${miVerbalScaleScore}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }

  setDbColour(dbVerbalScaleScore: string) {

    this.db1 = this.db2 = this.db3 = this.db4 = this.db5 = this.db6 = this.db7 = this.db8 = this.db9 = this.db10 = this.db11 = this.db12 = this.db13 = this.db14 
    = this.db15 = this.db16 = this.db17 = this.db18 = this.db19 = this.db20 = '';
    let dynamicKey = `db${dbVerbalScaleScore}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }

  setLbColour(lbVerbalScaleScore: string) {

    this.lb1 = this.lb2 = this.lb3 = this.lb4 = this.lb5 = this.lb6 = this.lb7 = this.lb8 = this.lb9 = this.lb10 = this.lb11 = this.lb12 = this.lb13 = this.lb14 
    = this.lb15 = this.lb16 = this.lb17 = this.lb18 = this.lb19 = this.lb20 = '';
    let dynamicKey = `lb${lbVerbalScaleScore}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  
  setVsrColour(vsrVerbalScaleScore: string) {

    this.vsr1 = this.vsr2 = this.vsr3 = this.vsr4 = this.vsr5 = this.vsr6 = this.vsr7 = this.vsr8 = this.vsr9 = this.vsr10 = this.vsr11 = this.vsr12 = this.vsr13 = this.vsr14 
    = this.vsr15 = this.vsr16 = this.vsr17 = this.vsr18 = this.vsr19 = this.vsr20 = '';
    let dynamicKey = `vsr${vsrVerbalScaleScore}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  
  setVmiColour(vmiVerbalScaleScore: string) {

    let temp = Number(vmiVerbalScaleScore);
    temp = temp > 50  ? Math.floor((temp-50)/5) : 0;
    this.vmi1 = this.vmi2 = this.vmi3 = this.vmi4 = this.vmi5 = this.vmi6 = this.vmi7 = this.vmi8 = this.vmi9 = this.vmi10 = this.vmi11 = this.vmi12 = this.vmi13 = this.vmi14 
    = this.vmi15 = this.vmi16 = this.vmi17 = this.vmi18 = this.vmi19 = this.vmi20 = '';
    let dynamicKey = `vmi${temp}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  
  setNmiColour(nmiVerbalScaleScore: string) {

    let temp = Number(nmiVerbalScaleScore);
    temp = temp > 50  ? Math.floor((temp-50)/5) : 0;
    this.nmi1 = this.nmi2 = this.nmi3 = this.nmi4 = this.nmi5 = this.nmi6 = this.nmi7 = this.nmi8 = this.nmi9 = this.nmi10 = this.nmi11 = this.nmi12 = this.nmi13 = this.nmi14 
    = this.nmi15 = this.nmi16 = this.nmi17 = this.nmi18 = this.nmi19 = this.nmi20 = '';
    let dynamicKey = `nmi${temp}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  
  setCmiColour(cmiVerbalScaleScore: string) {

    let temp = Number(cmiVerbalScaleScore);
    temp = temp > 50  ? Math.floor((temp-50)/5) : 0;
    this.cmi1 = this.cmi2 = this.cmi3 = this.cmi4 = this.cmi5 = this.cmi6 = this.cmi7 = this.cmi8 = this.cmi9 = this.cmi10 = this.cmi11 = this.cmi12 = this.cmi13 = this.cmi14 
    = this.cmi15 = this.cmi16 = this.cmi17 = this.cmi18 = this.cmi19 = this.cmi20 = '';
    let dynamicKey = `cmi${temp}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  
  setVdriColour(vdriVerbalScaleScore: string) {

    let temp = Number(vdriVerbalScaleScore);
    temp = temp > 50  ? Math.floor((temp-50)/5) : 0;
    this.vdri1 = this.vdri2 = this.vdri3 = this.vdri4 = this.vdri5 = this.vdri6 = this.vdri7 = this.vdri8 = this.vdri9 = this.vdri10 = this.vdri11 = this.vdri12 = this.vdri13 = this.vdri14 
    = this.vdri15 = this.vdri16 = this.vdri17 = this.vdri18 = this.vdri19 = this.vdri20 = '';
    let dynamicKey = `vdri${temp}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  
  setAciColour(aciVerbalScaleScore: string) {

    let temp = Number(aciVerbalScaleScore);
    temp = temp > 50  ? Math.floor((temp-50)/5) : 0;
    this.aci1 = this.aci2 = this.aci3 = this.aci4 = this.aci5 = this.aci6 = this.aci7 = this.aci8 = this.aci9 = this.aci10 = this.aci11 = this.aci12 = this.aci13 = this.aci14 
    = this.aci15 = this.aci16 = this.aci17 = this.aci18 = this.aci19 = this.aci20 = '';
    let dynamicKey = `aci${temp}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  
  setSriColour(sriVerbalScaleScore: string) {

    let temp = Number(sriVerbalScaleScore);
    temp = temp > 50  ? Math.floor((temp-50)/5) : 0;
    this.sri1 = this.sri2 = this.sri3 = this.sri4 = this.sri5 = this.sri6 = this.sri7 = this.sri8 = this.sri9 = this.sri10 = this.sri11 = this.sri12 = this.sri13 = this.sri14 
    = this.sri15 = this.sri16 = this.sri17 = this.sri18 = this.sri19 = this.sri20 = '';
    let dynamicKey = `sri${temp}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  
  setFriColour(friVerbalScaleScore: string) {

    let temp = Number(friVerbalScaleScore);
    temp = temp > 50  ? Math.floor((temp-50)/5) : 0;
    this.fri1 = this.fri2 = this.fri3 = this.fri4 = this.fri5 = this.fri6 = this.fri7 = this.fri8 = this.fri9 = this.fri10 = this.fri11 = this.fri12 = this.fri13 = this.fri14 
    = this.fri15 = this.fri16 = this.fri17 = this.fri18 = this.fri19 = this.fri20 = '';
    let dynamicKey = `fri${temp}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  
  setAriColour(ariVerbalScaleScore: string) {

    let temp = Number(ariVerbalScaleScore);
    temp = temp > 50  ? Math.floor((temp-50)/5) : 0;
    this.ari1 = this.ari2 = this.ari3 = this.ari4 = this.ari5 = this.ari6 = this.ari7 = this.ari8 = this.ari9 = this.ari10 = this.ari11 = this.ari12 = this.ari13 = this.ari14 
    = this.ari15 = this.ari16 = this.ari17 = this.ari18 = this.ari19 = this.ari20 = '';
    let dynamicKey = `ari${temp}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  
  setLiColour(liVerbalScaleScore: string) {

    let temp = Number(liVerbalScaleScore);
    temp = temp > 50  ? Math.floor((temp-50)/5) : 0;
    this.li1 = this.li2 = this.li3 = this.li4 = this.li5 = this.li6 = this.li7 = this.li8 = this.li9 = this.li10 = this.li11 = this.li12 = this.li13 = this.li14 
    = this.li15 = this.li16 = this.li17 = this.li18 = this.li19 = this.li20 = '';
    let dynamicKey = `li${temp}`;
    Reflect.set(this, dynamicKey, this.colorGreen);
  }
  
  LoadClient(clientId : string)
  {
    this.http.get<Tomal>(this.baseUrl + 'client/tomal/'+ clientId + '', 
    this.setHeader()).subscribe({
      next: (x) =>{

        this.selected = x.selected,
        this.mfsVerbalRawScore = x.mfsVerbalRawScore.toString(),
        this.mfsVerbalScaleScore = x.mfsVerbalScaleScore.toString(),
        this.mfsVerbalPercentageRank = x.mfsVerbalPercentageRank.toString(),
        this.fmNonVerbalRawScore = x.fmNonVerbalRawScore.toString(),
        this.fmNonVerbalScaleScore = x.fmNonVerbalScaleScore.toString(),
        this.fmNonVerbalPercentageRank = x.fmNonVerbalPercentageRank.toString(),
        this.wsrVerbalRawScore = x.wsrVerbalRawScore.toString(),
        this.wsrVerbalScaleScore = x.wsrVerbalScaleScore.toString(),
        this.wsrVerbalPercentageRank = x.wsrVerbalPercentageRank.toString(),
        this.avmNonVerbalRawScore = x.avmNonVerbalRawScore.toString(),
        this.avmNonVerbalScaleScore = x.avmNonVerbalScaleScore.toString(),
        this.avmNonVerbalPercentageRank = x.avmNonVerbalPercentageRank.toString(),
        this.orVerbalRawScore = x.orVerbalRawScore.toString(),
        this.orVerbalScaleScore = x.orVerbalScaleScore.toString(),
        this.orVerbalPercentageRank = x.orVerbalPercentageRank.toString(),
        this.vsmNonVerbalRawScore = x.vsmNonVerbalRawScore.toString(),
        this.vsmNonVerbalScaleScore = x.vsmNonVerbalScaleScore.toString(),
        this.vsmNonVerbalPercentageRank = x.vsmNonVerbalPercentageRank.toString(),
        this.prVerbalRawScore = x.prVerbalRawScore.toString(),
        this.prVerbalScaleScore = x.prVerbalScaleScore.toString(),
        this.prVerbalPercentageRank = x.prVerbalPercentageRank.toString(),
        this.mflNonVerbalRawScore = x.mflNonVerbalRawScore.toString(),
        this.mflNonVerbalScaleScore = x.mflNonVerbalScaleScore.toString(),
        this.mflNonVerbalPercentageRank = x.mflNonVerbalPercentageRank.toString(),
        this.ofVerbalRawScore = x.ofVerbalRawScore.toString(),
        this.ofVerbalScaleScore = x.ofVerbalScaleScore.toString(),
        this.ofVerbalPercentageRank = x.ofVerbalPercentageRank.toString(),
        this.vsrNonVerbalRawScore = x.vsrNonVerbalRawScore.toString(),
        this.vsrNonVerbalScaleScore = x.vsrNonVerbalScaleScore.toString(),
        this.vsrNonVerbalPercentageRank = x.vsrNonVerbalPercentageRank.toString(),
        this.lfVerbalRawScore = x.lfVerbalRawScore.toString(),
        this.lfVerbalScaleScore = x.lfVerbalScaleScore.toString(),
        this.lfVerbalPercentageRank = x.lfVerbalPercentageRank.toString(),
        this.mlNonVerbalRawScore = x.mlNonVerbalRawScore.toString(),
        this.mlNonVerbalScaleScore = x.mlNonVerbalScaleScore.toString(),
        this.mlNonVerbalPercentageRank = x.mlNonVerbalPercentageRank.toString(),
        this.dbVerbalRawScore = x.dbVerbalRawScore.toString(),
        this.dbVerbalScaleScore = x.dbVerbalScaleScore.toString(),
        this.dbVerbalPercentageRank = x.dbVerbalPercentageRank.toString(),
        this.lbVerbalRawScore = x.lbVerbalRawScore.toString(),
        this.lbVerbalScaleScore = x.lbVerbalScaleScore.toString(),
        this.lbVerbalPercentageRank = x.lbVerbalPercentageRank.toString(),
        this.mfsdVerbalRawScore = x.mfsdVerbalRawScore.toString(),
        this.mfsdVerbalScaleScore = x.mfsdVerbalScaleScore.toString(),
        this.mfsdVerbalPercentageRank = x.mfsdVerbalPercentageRank.toString(),
        this.wsrdVerbalRawScore = x.mfsdVerbalPercentageRank.toString(),
        this.wsrdVerbalScaleScore = x.wsrdVerbalScaleScore.toString(),
        this.wsrdVerbalPercentageRank = x.wsrdVerbalPercentageRank.toString(),

        this.mfsVmi = x.mfsVmi.toString(),
        this.mfsCmi = x.mfsCmi.toString(),
        this.mfsAri = x.mfsAri.toString(),
        this.fmNmi = x.fmNmi.toString(),
        this.fmCmi = x.fmCmi.toString(),
        this.fmFri = x.fmFri.toString(),
        this.wsrVmi = x.wsrVmi.toString(),
        this.wsrCmi = x.wsrCmi.toString(),
        this.wsrLi = x.wsrLi.toString(),
        this.avmNmi = x.avmNmi.toString(),
        this.avmCmi = x.avmCmi.toString(),
        this.avmFri = x.avmFri.toString(),
        this.orVmi = x.orVmi.toString(),
        this.orCmi = x.orCmi.toString(),
        this.orLi = x.orLi.toString(),
        this.vsmNmi = x.vsmNmi.toString(),
        this.vsmCmi = x.vsmCmi.toString(),
        this.vsmSri = x.vsmSri.toString(),
        this.prVmi = x.prVmi.toString(),
        this.prCmi = x.prCmi.toString(),
        this.prAri = x.prAri.toString(),
        this.prLi = x.prLi.toString(),
        this.mflNmi = x.mflNmi.toString(),
        this.mflCmi = x.mflCmi.toString(),
        this.mflFri = x.mflFri.toString(),
        this.dfAci = x.dfAci.toString(),
        this.dfSri = x.dfSri.toString(),
        this.vsrLi = x.vsrLi.toString(),
        this.lfAci = x.lfAci.toString(),
        this.lfSri = x.lfSri.toString(),
        this.miAci = x.miAci.toString(),
        this.miSri = x.miSri.toString(),
        this.dbAci = x.dbAci.toString(),
        this.lbAci = x.lbAci.toString(),
        this.mfsdVdri = x.mfsdVdri.toString(),
        this.wsrdVdri = x.wsrdVdri.toString(),
        this.smVmi = x.smVmi.toString(),
        this.smNmi = x.smNmi.toString(),
        this.smCmi = x.smCmi.toString(),
        this.smVdri = x.smVdri.toString(),
        this.smAci = x.smAci.toString(),
        this.smSri = x.smSri.toString(),
        this.smFri = x.smFri.toString(),
        this.smAri = x.smAri.toString(),
        this.smli = x.smli.toString(),

        this.indVmi = x.indVmi.toString(),
        this.indNmi = x.indNmi.toString(),
        this.indCmi = x.indCmi.toString(),
        this.indVdri = x.indVdri.toString(),
        this.indAci = x.indAci.toString(),
        this.indSri = x.indSri.toString(),
        this.indFri = x.indFri.toString(),
        this.indAri = x.indAri.toString(),
        this.indli = x.indli.toString(),

        this.perVmi = x.perVmi,
        this.perNmi = x.perNmi,
        this.perCmi = x.perCmi,
        this.perVdri = x.perVdri,
        this.perAci = x.perAci,
        this.perSri = x.perSri,
        this.perFri = x.perFri,
        this.perAri = x.perAri,
        this.perli = x.perli,
                
        console.log(x);
      },
      error: (msg)=> {
        console.log(msg);
      }
    });
  }

  onSave(){
    const body = {

      selected : this.selected,
      mfsVerbalRawScore : this.mfsVerbalRawScore,
      mfsVerbalScaleScore : this.mfsVerbalScaleScore,
      mfsVerbalPercentageRank : this.mfsVerbalPercentageRank,
      fmNonVerbalRawScore : this.fmNonVerbalRawScore,
      fmNonVerbalScaleScore : this.fmNonVerbalScaleScore,
      fmNonVerbalPercentageRank : this.fmNonVerbalPercentageRank,
      wsrVerbalRawScore : this.wsrVerbalRawScore,
      wsrVerbalScaleScore : this.wsrVerbalScaleScore,
      wsrVerbalPercentageRank : this.wsrVerbalPercentageRank,
      avmNonVerbalRawScore : this.avmNonVerbalRawScore,
      avmNonVerbalScaleScore : this.avmNonVerbalScaleScore,
      avmNonVerbalPercentageRank : this.avmNonVerbalPercentageRank,
      orVerbalRawScore : this.orVerbalRawScore,
      orVerbalScaleScore : this.orVerbalScaleScore,
      orVerbalPercentageRank : this.orVerbalPercentageRank,
      vsmNonVerbalRawScore : this.vsmNonVerbalRawScore,
      vsmNonVerbalScaleScore : this.vsmNonVerbalScaleScore,
      vsmNonVerbalPercentageRank : this.vsmNonVerbalPercentageRank,
      prVerbalRawScore : this.prVerbalRawScore,
      prVerbalScaleScore : this.prVerbalScaleScore,
      prVerbalPercentageRank : this.prVerbalPercentageRank,
      mflNonVerbalRawScore : this.mflNonVerbalRawScore,
      mflNonVerbalScaleScore : this.mflNonVerbalScaleScore,
      mflNonVerbalPercentageRank : this.mflNonVerbalPercentageRank,
      ofVerbalRawScore : this.ofVerbalRawScore,
      ofVerbalScaleScore : this.ofVerbalScaleScore,
      ofVerbalPercentageRank : this.ofVerbalPercentageRank,
      vsrNonVerbalRawScore : this.vsrNonVerbalRawScore,
      vsrNonVerbalScaleScore : this.vsrNonVerbalScaleScore,
      vsrNonVerbalPercentageRank : this.vsrNonVerbalPercentageRank,
      lfVerbalRawScore : this.lfVerbalRawScore,
      lfVerbalScaleScore : this.lfVerbalScaleScore,
      lfVerbalPercentageRank : this.lfVerbalPercentageRank,
      mlNonVerbalRawScore : this.mlNonVerbalRawScore,
      mlNonVerbalScaleScore : this.mlNonVerbalScaleScore,
      mlNonVerbalPercentageRank : this.mlNonVerbalPercentageRank,
      dbVerbalRawScore : this.dbVerbalRawScore,
      dbVerbalScaleScore : this.dbVerbalScaleScore,
      dbVerbalPercentageRank : this.dbVerbalPercentageRank,
      lbVerbalRawScore : this.lbVerbalRawScore,
      lbVerbalScaleScore : this.lbVerbalScaleScore,
      lbVerbalPercentageRank : this.lbVerbalPercentageRank,
      mfsdVerbalRawScore : this.mfsdVerbalRawScore,
      mfsdVerbalScaleScore : this.mfsdVerbalScaleScore,
      mfsdVerbalPercentageRank : this.mfsdVerbalPercentageRank,
      wsrdVerbalRawScore : this.mfsdVerbalPercentageRank,
      wsrdVerbalScaleScore : this.wsrdVerbalScaleScore,
      wsrdVerbalPercentageRank : this.wsrdVerbalPercentageRank,

      mfsVmi : this.mfsVmi,
      mfsCmi : this.mfsCmi,
      mfsAri : this.mfsAri,
      fmNmi : this.fmNmi,
      fmCmi : this.fmCmi,
      fmFri : this.fmFri,
      wsrVmi : this.wsrVmi,
      wsrCmi : this.wsrCmi,
      wsrLi : this.wsrLi,
      avmNmi : this.avmNmi,
      avmCmi : this.avmCmi,
      avmFri : this.avmFri,
      orVmi : this.orVmi,
      orCmi : this.orCmi,
      orLi : this.orLi,
      vsmNmi : this.vsmNmi,
      vsmCmi : this.vsmCmi,
      vsmSri : this.vsmSri,
      prVmi : this.prVmi,
      prCmi : this.prCmi,
      prAri : this.prAri,
      prLi : this.prLi,
      mflNmi : this.mflNmi,
      mflCmi : this.mflCmi,
      mflFri : this.mflFri,
      dfAci : this.dfAci,
      dfSri : this.dfSri,
      vsrLi : this.vsrLi,
      lfAci : this.lfAci,
      lfSri : this.lfSri,
      miAci : this.miAci,
      miSri : this.miSri,
      dbAci : this.dbAci,
      lbAci : this.lbAci,
      mfsdVdri : this.mfsdVdri,
      wsrdVdri : this.wsrdVdri,
      
      smVmi : this.smVmi,
      smNmi : this.smNmi,
      smCmi : this.smCmi,
      smVdri : this.smVdri,
      smAci : this.smAci,
      smSri : this.smSri,
      smFri : this.smFri,
      smAri : this.smAri,
      smli : this.smli,

      indVmi : this.indVmi,
      indNmi : this.indNmi,
      indCmi : this.indCmi,
      indVdri : this.indVdri,
      indAci : this.indAci,
      indSri : this.indSri,
      indFri : this.indFri,
      indAri : this.indAri,
      indli : this.indli,

      perVmi : this.perVmi,
      perNmi : this.perNmi,
      perCmi : this.perCmi,
      perVdri : this.perVdri,
      perAci : this.perAci,
      perSri : this.perSri,
      perFri : this.perFri,
      perAri : this.perAri,
      perli : this.perli,
      
      clientId : this.clientId
    };

    this.http.post<Tomal>(this.baseUrl + 'client/tomal', 
    body
    , this.setHeader()).subscribe({
      next: (x) =>{
        console.log(x);
        
        this.notificationService.success('TOMAL Submitted successfully');
      },
      error: (msg)=> {
        console.log(msg);
        
        this.notificationService.success('TOMAL Failed : ' + msg.toString());
      }
    });
  }

}

