using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace UdemyCurso.Controllers
{
    public class AlumnoController : Controller
    {

        UdemyCurso.Models.BaseMatriculaLINQDataContext db = new Models.BaseMatriculaLINQDataContext();

        public ActionResult TablaAlumnos()
        {
            return View();
        }


        public JsonResult ListarAlumnos()
        {


            var lista = db.Alumnos.Where(parametro => parametro.BHABILITADO.Equals(1))
                .Select(columnas => new { columnas.IIDALUMNO, columnas.APPATERNO, columnas.NOMBRE, FECHA_NACIMIENTO = ((DateTime)columnas.FECHANACIMIENTO).ToShortDateString(), columnas.TELEFONOPADRE });

            return Json(lista, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ObtenerSexos()
        {


            var lista = db.Sexos.Where(parametro => parametro.BHABILITADO.Equals(1))
                .Select(columnas => new { ID = columnas.IIDSEXO, DESCRIPCION = columnas.NOMBRE });

            return Json(lista, JsonRequestBehavior.AllowGet);
        }


        public JsonResult ListarAlumnosPorSexo(int idSexo)
        {

            var lista = db.Alumnos.Where(parametro => parametro.BHABILITADO.Equals(1)
                 && parametro.IIDSEXO.Equals(idSexo))
                .Select(columnas => new { columnas.IIDALUMNO, columnas.APPATERNO, columnas.NOMBRE, FECHA_NACIMIENTO = ((DateTime)columnas.FECHANACIMIENTO).ToShortDateString(), columnas.TELEFONOPADRE });


            return Json(lista, JsonRequestBehavior.AllowGet);
        }

    }
}