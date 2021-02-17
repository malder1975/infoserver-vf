<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\DISL;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DislRdoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $date = \Carbon\Carbon::now()->format('Ymd H:m:s');

        $disl = DB::statement('EXEC dbo.INITDISLRDO2 ?, ?, ?, ?, ?, ?, ?, ?, ?, ?', ['','','ALL','','','','',0,$date,0]);



        //return response()->json($disl,200);
        $dislRDO = DISL::select(DISL::raw('CASE WHEN DISL$RDO1.LINE = 10 THEN VSL.ABBR ELSE \'\' END AS VSLABBR'),'USERNAME',
            'DISL$RDO1.CODEFRMOUR', 'DISL$RDO1.CODERSP', 'CODEVSL', 'CODEPRT', 'DATEOPP', 'CODEOPP', 'PRT.ABBR AS PRTABBR',
            'DISL$RDO1.QTYFUEL', 'DISL$RDO1.QTYFUEL_M', 'DISL$RDO1.QTYFUEL_S', 'DISL$RDO1.QTYFUEL_O', 'DISL$RDO1.QTYOIL',
            'DISL$RDO1.QTYWATER', 'PRTETS.ABBR AS PRTETSABBR', 'CRG.ABBR AS CRGABBR', 'PLACEVSL', 'STARTDATE', 'STARTDATEOPP',
            'STOPDATEOPP', 'STOPDATE', 'DATEETS', 'PRTETS.ABBR AS PRTETSABBR', 'CRG.ABBR AS CRGABBR', 'QTYCARGO', 'CODEUNIT',
            'DATEPLN', 'PRTPLNSTART.ABBR AS PRTPLNSTARTABBR', 'CRGPLN.ABBR AS CRGPLNABBR', 'PRTPLNSTOP.ABBR AS PRTPLNSTOPABBR',
            DISL::raw('CASE WHEN DISL$RDO1.CODEOPP IN (\'PP\',\'PV\',\'KVG-PP\', \'PPR\', \'PNR\') THEN 0 WHEN DISL$RDO1.CODEOPP = \'\' THEN (ISNULL ((SELECT TOP 1 1 FROM DISL$RDO1 D
            WHERE D.USERNAME = \'DISL\' AND D.CODEVSL = CODEVSL AND LINE = 10 AND CODEOPP IN (\'PP\', \'PV\', \'KVG-PP\', \'PPR\', \'PNP\')), \'\')) ELSE 1 END AS ORDEROPP')
            )
            ->join('VSL', 'DISL$RDO1.CODEVSL', '=', 'VSL.CODE')
            ->join('PRT', 'DISL$RDO1.CODEPRT', '=', 'PRT.CODE', 'left outer')
            ->join('PRT AS PRTETS', 'DISL$RDO1.CODEPRTETS', '=', 'PRTETS.CODE', 'left outer')
            ->join('CRG', 'DISL$RDO1.CODECARGO', '=', 'CRG.CODE', 'LEFT OUTER')
            ->join('PRT AS PRTPLNSTART', 'DISL$RDO1.CODEPRTSTARTPLN', '=', 'PRTPLNSTART.CODE', 'LEFT OUTER')
            ->join('CRG AS CRGPLN', 'DISL$RDO1.CODECARGOPLN', '=', 'CRGPLN.CODE', 'LEFT OUTER')
            ->join('PRT AS PRTPLNSTOP', 'DISL$RDO1.CODEPRTSTOPPLN', '=', 'PRTPLNSTOP.CODE', 'LEFT OUTER')
            ->where('USERNAME', 'DISL')
            ->orderBy('ORDEROPP', request('ordering_rule', 'asc'))->get();

        return response()->json($dislRDO, 200);
        //SELECT        DISL.USERNAME, DISL.CODEFRMOUR, DISL.CODERSP, DISL.CODEVSL, DISL.CODEPRT, DISL.STARTDATE, DISL.STARTDATEOPP, DISL.STOPDATEOPP, DISL.STOPDATE, DISL.CODEPRTETS, DISL.DATEETS,
        //                         DISL.CODECARGO, DISL.QTYCARGO, DISL.CODEUNIT, DISL.DATEOPP, DISL.CODEOPP, DISL.PLACEVSL, DISL.QTYFULL, DISL.DATEPLN, DISL.CODEPRTSTARTPLN, DISL.CODECARGOPLN,
        //                         DISL.CODEPRTSTOPPLN, DISL.NOTE, DISL.OWN, DISL.MODDATE, DISL.LINE, DISL.QTYFUEL, DISL.CODEFRM, DISL.STARTDATEOPPETS, DISL.STOPDATEOPPETS, DISL.STOPDATEETS, DISL.CODESTATPLACE,
        //                         DISL.CODESTATPLACEETS, DISL.CODERSPMNG, DISL.CODEVS, DISL.FIXPOPP, DISL.STARTDATEOPPPLN, DISL.STOPDATEOPPPLN, DISL.TIMEPRT, DISL.FRMBRC,
        //                         CASE WHEN DISL.LINE = 10 THEN VSL.ABBR ELSE '' END AS VSLABBR, ISNULL(PRT.ABBR, '') AS PRTABBR, ISNULL(PRTETS.ABBR, '') AS PRTETSABBR, ISNULL(CRG.ABBR, '') AS CRGABBR,
        //                         ISNULL(PRTPLNSTART.ABBR, '') AS PRTPLNSTARTABBR, ISNULL(CRGPLN.ABBR, '') AS CRGPLNABBR, ISNULL(PRTPLNSTOP.ABBR, '') AS PRTPLNSTOPABBR, dbo.FRM.NAME AS FRM_NAME, DATEDIFF(hh,
        //                         DISL.STARTDATEOPPPLN, DISL.STOPDATEOPPPLN) AS TIMEPRTPLN, dbo.RSP.NAME AS RSPNAME, CASE WHEN DISL.CODEOPP IN ('PP', 'PV', 'KVG-PP', 'PPR', 'PNR')
        //                         THEN 0 WHEN DISL.CODEOPP = '' THEN (isnull
        //                             ((SELECT        TOP 1 1
        //                                 FROM            dbo.DISL$RDO1 d WITH (nolock)
        //                                 WHERE        d .username = SYSTEM_USER AND d .codevsl = disl.codevsl AND disl.line = 10 AND DISL.CODEOPP IN ('PP', 'PV', 'KVG-PP', 'PPR', 'PNR')), '')) ELSE 1 END AS ORDEROPP,
        //                         CASE WHEN vsl.CODEVSLTYPE = 'AUX' THEN CODEVSLTYPE WHEN vsl.CODEVSLTYPE LIKE 'buk%' THEN CODEVSLTYPE WHEN vsl.CODEVSLTYPE = 'ICE' THEN CODEVSLTYPE WHEN vsl.CODEVSLTYPE = 'BAR'
        //                          THEN CODEVSLTYPE ELSE NULL END AS CODEVSLTYPE
        //FROM            dbo.DISL$RDO1 AS DISL WITH (NOLOCK) LEFT OUTER JOIN
        //                         dbo.PRT AS PRT WITH (NOLOCK) ON DISL.CODEPRT = PRT.CODE LEFT OUTER JOIN
        //                         dbo.PRT AS PRTETS WITH (NOLOCK) ON DISL.CODEPRTETS = PRTETS.CODE LEFT OUTER JOIN
        //                         dbo.CRG AS CRG WITH (NOLOCK) ON DISL.CODECARGO = CRG.CODE LEFT OUTER JOIN
        //                         dbo.PRT AS PRTPLNSTART WITH (NOLOCK) ON DISL.CODEPRTSTARTPLN = PRTPLNSTART.CODE LEFT OUTER JOIN
        //                         dbo.CRG AS CRGPLN WITH (NOLOCK) ON DISL.CODECARGOPLN = CRGPLN.CODE LEFT OUTER JOIN
        //                         dbo.PRT AS PRTPLNSTOP WITH (NOLOCK) ON DISL.CODEPRTSTOPPLN = PRTPLNSTOP.CODE INNER JOIN
        //                         dbo.VSL WITH (NOLOCK) ON DISL.CODEVSL = dbo.VSL.CODE INNER JOIN
        //                         dbo.FRM WITH (nolock) ON DISL.CODEFRM = dbo.FRM.CODE INNER JOIN
        //                         dbo.RSP WITH (nolock) ON DISL.CODERSP = dbo.RSP.CODE
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
