# Labbuppgift 3.2 för kursen DT207G Backend-baserad webbutveckling

I detta repository finns kod för ett REST API byggt med Express.<br>
APIets syfte är att skapa ett CV där arbetserfarenhet ska kunna läggas till, visas, uppdateras och raderas.<br>
Denna funktionalitet skapas med CRUD (Create, Read, Update, Delete).<br>

## Installation, databas
APIet använder en MongoDB-databas. Klona ner källkodsfilerna, kör kommando npm install för att installera nödvändiga npm-paket.<br>
Kör installations-skriptet install.js. Installations-skriptet skapar en databastabell enlig nedan:

<table>
<tr>
  <th>Tabell-namn</th>
  <th>Fält</th>
</tr>
<tr>
  <td>workexperiences</td>
  <td><strong>id</strong>(Number), <strong>companyname</strong>(String), <strong>jobtitle</strong>(String), <strong>location</strong>(String), <strong>startdate</strong>(Date), <strong>enddate</strong>(Date), <strong>description</strong>(String)</td>
</tr>
</table>

## Användning
Nedan finns beskrivet hur man kan nå APIet på olika vis:

<table>
<tr>
  <th>Metod</th>
  <th>Ändpunkt</th>
  <th>Beskrivning</th>
</tr>
<tr>
  <td>GET</td>
  <td>/workexperiences</td>
  <td>Hämtar alla tillgängliga arbetserfarenheter.</td>
</tr>
<tr>
  <td>GET</td>
  <td>/workexperiences/:id</td>
  <td>Hämtar en specifik arbetserfarenheter med angivet ID.</td>
  </tr>
<tr>
  <td>POST</td>
  <td>/workexperiences</td>
  <td>Lagrar en ny arbetserfarenhet. Kräver att ett objekt med arbetserfarenhet skickas med.</td>
</tr>
<tr>
  <td>PUT</td>
  <td>/workexperiences/:id</td>
  <td>Uppdaterar en existerande arbetserfarenhet med angivet ID.</td>
</tr>
<tr>
  <td>DELETE</td>
  <td>/workexperiences/:id</td>
  <td>Raderar en arbetserfarenhet med angivet ID.</td>
</tr>
</table>
Ett objekt med arbetserfarenhet retuneras/skickas som JSON med följande struktur:

```
   {
     "companyname": "Naturapoteket",
     "jobtitle": "Säljare",
     "location": "Stockholm",
     "startdate": "2001-08-01",
     "enddate": "2006-04-30",
     "description": "Säljare och rådgivare i hälsokostbutik"
   }
```
