import { Component, Input, ElementRef } from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'email-template',
  templateUrl: './email-template.component.html',
})
export class EmailTemplateComponent {
  // Set our default values
  localState = { value: '' };
  @Input() email = {
    general: {
      heading: "test",
      subheading: "test"
    }
  };
  content = "";
  htmlElement: ElementRef;
  

  // TypeScript public modifiers
  constructor(public appState: AppState, public el: ElementRef) {
    this.htmlElement = el;
  }


  ngOnInit() {

  }
  
  downloadHtml() {
    console.log(this.getHtmlEmailContent());
  }

  getStyleContent(){
      return `body {
            margin: 0;
            padding: 0;
            min-width: 100%!important;
        }
        
        .content {
            width: 100%;
            max-width: 600px;
        }
        
        @media only screen and (min-device-width: 601px) {
            .content {
                width: 600px !important;
            }
        }
        
        .header {
            padding: 20px 30px 20px 30px;
        }
        
        .col275 {
            width: 275px!important;
        }
        
        .subhead {
            font-size: 15px;
            color: {{email.general.color}};
            font-family: sans-serif;
            letter-spacing: 10px;
        }
        
        .h1 {
            font-size: 33px;
            line-height: 38px;
            font-weight: bold;
        }
        
        .h1,
        .h2,
        .h3 {
            color: #12569E;
            font-family: sans-serif;
        }
        
        .bodycopy {
            color: #153643;
            font-family: sans-serif;
        }
        
        .innerpadding {
            padding: 30px 30px 30px 30px;
        }
        
        .borderbottom {
            border-bottom: 1px solid #f2eeed;
        }
        
        .h2 {
            padding: 0 0 15px 0;
            font-size: 24px;
            line-height: 28px;
            font-weight: bold;
        }
        
        .h3 {
            padding: 0 0 5px 0;
            font-size: 20px;
            line-height: 24px;
            font-weight: bold;
        }
        
        .bodycopy {
            font-size: 16px;
            line-height: 22px;
        }
        
        .button {
            text-align: center;
            font-size: 14px;
            font-family: sans-serif;
            font-weight: bold;
            padding: 0 30px 0 30px;
        }
        
        .button a {
            color: #ffffff;
            text-decoration: none;
        }
        
        @media only screen and (min-device-width: 601px) {
            .content {
                width: 600px !important;
            }
            .col425 {
                width: 425px!important;
            }
            .col380 {
                width: 380px!important;
            }
        }
        
        img {
            height: auto;
        }
        
        .footer {
            padding: 20px 30px 15px 30px;
        }
        
        .footercopy {
            font-family: sans-serif;
            font-size: 14px;
            color: #ffffff;
        }
        
        .footercopy a {
            color: #ffffff;
            text-decoration: underline;
        }
        
        @media only screen and (max-width: 550px),
        screen and (max-device-width: 550px) {
            body[yahoo] .buttonwrapper {
                background-color: transparent!important;
            }
            body[yahoo] .button a {
                background-color: #ADACB2;
                padding: 15px 15px 13px!important;
                display: block!important;
            }
        }
        
        body[yahoo] .unsubscribe {
            display: block;
            margin-top: 20px;
            padding: 10px 50px;
            background: #2f3942;
            border-radius: 5px;
            text-decoration: none!important;
            font-weight: bold;
            width: 70px;
        }
        
        body[yahoo] .hide {
            display: none!important;
        }`;
  }

  getHeadContent() {
      return `<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>${this.email.general.heading}</title>
    <style type="text/css">
     ${this.getStyleContent()}   
    </style>
    </head>`;
  }

  getHtmlEmailContent() {
      return `<html xmlns="http://www.w3.org/1999/xhtml">
      ${this.getHeadContent()}
      ${this.getBodyContent()}
      </html>`
  }

  getBodyContent() {

    return `<body yahoo bgcolor="#f6f8f1">
    <table width="100%" bgcolor="#f7ffff" border="0" cellpadding="0" cellspacing="0">
        <!-- original: f6f8f1-->
        <tr>
            <td>
                <!--[if (gte mso 9)|(IE)]>
<table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td>
            <![endif]-->
                <table class="content" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff">
                    <tr>
                        <td class="header" bgcolor="#6DBBEF">
                            <!--original: 51A0D5 -->

                            <!--[if (gte mso 9)|(IE)]>
<table width="425" align="left" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td>
        <![endif]-->
                            <table class="col275" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 275px;">
                                <tr>
                                    <td height="70">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td class="subhead" style="padding: 0 0 0 3px;">
                                                    ${this.email.general.subheading}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="h1" style="padding: 5px 0 0 0;">
                                                    ${this.email.general.heading}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]>
        </td>
    </tr>
</table>
<![endif]-->
                            <table width="220" align="right" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td height="70" style="padding: 0 0px 20px 0;">
                                        <img src="Logo-Bethanien-RGB.png" width="220" height="90" border="0" alt="bild" />
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>

                    <tr>
                        <td class="innerpadding borderbottom">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td class="h2">
                                        Aus der Arbeit der Bethanien Diakonissen-Stiftung
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bodycopy">
                                        Dies sind die Neuigkeiten im November 2015
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>


                    <tr>
                        <td class="innerpadding borderbottom">
                            <table width="100%" align="left" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td class="h3">
                                        Personen
                                    </td>
                                </tr>
                            </table>
                            <table width="115" align="left" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td height="115" style="padding: 0 20px 20px 0;">
                                        <img src="article1.jpg" width="115" height="115" border="0" alt="article" />
                                    </td>
                                </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]>
      <table width="380" align="left" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
    <![endif]-->
                            <table class="col380" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 380px;">
                                <tr>
                                    <td>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td class="bodycopy">
                                                    <ul style="-webkit-margin-before:0;">
                                                        <li>In Hamburg feierten am 25.10. Sr. Gertrud Hilpmann 80-jähriges Dienstjubiläum, Sr. Efriede Harders 70-jähriges, Sr. Sieglinde Richter 60-jähriges.</li>
                                                        <li>Helmut Rothfuß wurde als pastoraler Direktor am 24.9. in Stuttgart eingeführt.</li>
                                                        <li>Kerstin Hartmann wurde als Seelsorgerin am 6.10. im Haus Radeland, Berlin eingeführt.</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 20px 0 0 0;">
                                                    <table class="buttonwrapper" align="right" bgcolor="#ADACB2" border="0" cellspacing="0" cellpadding="0">
                                                        <!-- original: e05443-->
                                                        <tr>
                                                            <td class="button" height="35">
                                                                <a href="http://www.bethanien-stiftung.de/85-0-Aktuelles.html?news=27">Hier weiterlesen...</a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]>
          </td>
        </tr>
    </table>
    <![endif]-->
                        </td>
                    </tr>

                    <tr>
                        <td class="innerpadding borderbottom">
                            <table width="100%" align="left" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td class="h3">
                                        Bethanien-Höfe Eppendorf
                                    </td>
                                </tr>
                            </table>

                            <table width="115" align="left" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td height="115" style="padding: 0 20px 20px 0;">
                                        <img src="article2.jpg" width="115" height="115" border="0" alt="article" />
                                    </td>
                                </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]>
      <table width="380" align="left" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
    <![endif]-->
                            <table class="col380" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 380px;">
                                <tr>
                                    <td>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td class="bodycopy">
                                                    Die Bethanien-Höfe Eppendorf mit neuem Mutterhaus, Seniorenresidenz, Pflegeheim und Gemeinde wurde am 7.9. von Bischöfin Rosemarie Wenner zusammen mit den Verantwortlichen von Bethanien feierlich eingeweiht.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 20px 0 0 0;">
                                                    <table class="buttonwrapper" align="right" bgcolor="#ADACB2" border="0" cellspacing="0" cellpadding="0">
                                                        <!-- original: e05443-->
                                                        <tr>
                                                            <td class="button" height="35">
                                                                <a href="http://www.bethanien-stiftung.de/85-0-Aktuelles.html?news=20">Hier weiterlesen...</a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]>
          </td>
        </tr>
    </table>
    <![endif]-->
                        </td>
                    </tr>

                    <tr>
                        <td class="innerpadding borderbottom">
                            <table width="100%" align="left" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td class="h3">
                                        basement 26
                                    </td>
                                </tr>
                            </table>

                            <table width="115" align="left" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td height="115" style="padding: 0 20px 20px 0;">
                                        <img src="article3.jpg" width="115" height="115" border="0" alt="article" />
                                    </td>
                                </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]>
      <table width="380" align="left" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
    <![endif]-->
                            <table class="col380" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 380px;">
                                <tr>
                                    <td>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td class="bodycopy">
                                                    Jugendliche Flüchtlinge nehmen das Angebot wahr, sich im „basement 26“, Kinder- und Jugendeinrichtung in Frankfurt, sportlich zu betätigen, zu entspannen sowie erste Deutschkenntnisse zu erwerben.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 20px 0 0 0;">
                                                    <table class="buttonwrapper" align="right" bgcolor="#ADACB2" border="0" cellspacing="0" cellpadding="0">
                                                        <!-- original: e05443-->
                                                        <tr>
                                                            <td class="button" height="35">
                                                                <a href="http://www.bethanien-stiftung.de/85-0-Aktuelles.html?news=26">Hier weiterlesen...</a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]>
          </td>
        </tr>
    </table>
    <![endif]-->
                        </td>
                    </tr>

                    <tr>
                        <td class="innerpadding borderbottom">
                            <table width="100%" align="left" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td class="h3">
                                        Bethesda-Kindertagesstätte
                                    </td>
                                </tr>
                            </table>
                            
                            <table width="115" align="left" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td height="115" style="padding: 0 20px 20px 0;">
                                        <img src="article3.jpg" width="115" height="115" border="0" alt="article" />
                                    </td>
                                </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]>
      <table width="380" align="left" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
    <![endif]-->
                            <table class="col380" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 380px;">
                                <tr>
                                    <td>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td class="bodycopy">
                                                    Zum neuen Kindergartenjahr ging die Trägerschaft an der Bethesda-Kindertagesstätte in Wuppertal auf die Bethanien Diakonissen-Stiftung über. In der Bethesda-Kita werden 80 Kinder in 4 Gruppen betreut.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 20px 0 0 0;">
                                                    <table class="buttonwrapper" align="right" bgcolor="#ADACB2" border="0" cellspacing="0" cellpadding="0">
                                                        <!-- original: e05443-->
                                                        <tr>
                                                            <td class="button" height="35">
                                                                <a href="http://www.bethanien-stiftung.de/85-0-Aktuelles.html?news=26">Hier weiterlesen...</a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]>
          </td>
        </tr>
    </table>
    <![endif]-->
                        </td>
                    </tr>

                    <tr>
                        <td class="innerpadding borderbottom">
                            <table width="100%" align="left" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td class="h3">
                                        Sternkinderambulanz Wuppertal
                                    </td>
                                </tr>
                            </table>
                            
                            <table width="115" align="left" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td height="115" style="padding: 0 20px 20px 0;">
                                        <img src="article5.jpg" width="115" height="115" border="0" alt="article" />
                                    </td>
                                </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]>
      <table width="380" align="left" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
    <![endif]-->
                            <table class="col380" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 380px;">
                                <tr>
                                    <td>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td class="bodycopy">
                                                    Die Sternenkinderambulanz Wuppertal wurde zum 1.10.2015 in die Trägerschaft der Bethanien Diakonissen-Stiftung übertragen, um sie langfristig zu sichern. Frau Spilker und Herr Woithe leiten diese wichtige Einrichtung für trauernde Eltern, die ihr Kind vor, während oder kurz nach der Geburt verloren haben.

                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 20px 0 0 0;">
                                                    <table class="buttonwrapper" align="right" bgcolor="#ADACB2" border="0" cellspacing="0" cellpadding="0">
                                                        <!-- original: e05443-->
                                                        <tr>
                                                            <td class="button" height="35">
                                                                <a href="http://www.bethanien-stiftung.de/85-0-Aktuelles.html?news=28">Hier weiterlesen...</a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]>
          </td>
        </tr>
    </table>
    <![endif]-->
                        </td>
                    </tr>

                    <tr>
                        <td class="innerpadding borderbottom bodycopy">
                            Möchten Sie keine weiteren Neuigkeiten über die Arbeit der Bethanien Diakonissen-Stiftung erhalten? Dann klicken Sie bitte unten auf den Abmeldebutton.
                        </td>
                    </tr>

                    <tr>
                        <td class="footer" bgcolor="#44525f">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="center" class="footercopy">
                                        <a href="#" class="unsubscribe">
                                            <font color="#ffffff">Abmelden</font>
                                        </a>
                                        <span class="hide">from this newsletter instantly</span>
                                        <p><b>Bethanien Diakonissen-Stiftung</b></p>
                                        <p>Dielmannstr. 26</p>
                                        <p>60599 Frankfurt am Main</p>
                                        <p><a href="www.bethanien-stiftung.de">www.bethanien-stiftung.de</a></p>
                                        <p>Vorstand: Dr. Lothar Elsner (Theol. Vorstand), Uwe M. Junga (Kaufm.Vorstand); Vorsitzender des Stiftungsrats: Christian Voller-Morgenstern</p>

                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>


                </table>
                <!--[if (gte mso 9)|(IE)]>
        </td>
    </tr>
</table>
<![endif]-->
            </td>
        </tr>
    </table>
</body>`;
  }

}