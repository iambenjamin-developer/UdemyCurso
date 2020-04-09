using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace UdemyCurso.Controllers
{
    public class CursoController : Controller
    {

        UdemyCurso.Models.BaseMatriculaLINQDataContext db = new Models.BaseMatriculaLINQDataContext();
        // GET: Curso
        public ActionResult Index()
        {
            return View();
        }


        public JsonResult ListarCurso()
        {

            
            var lista = db.Cursos.Where(parametro => parametro.BHABILITADO.Equals(1)).ToList()
                .Select(columnas => new { columnas.IIDCURSO, columnas.NOMBRE, columnas.DESCRIPCION });

            return Json(lista, JsonRequestBehavior.AllowGet);
        }


        public JsonResult ListarCursoPorNombre(string nombre)
        {


            var lista = db.Cursos.Where(parametro => parametro.BHABILITADO.Equals(1) && parametro.NOMBRE.Contains(nombre))
                .ToList()
                .Select(columnas => new { columnas.IIDCURSO, columnas.NOMBRE, columnas.DESCRIPCION });

            return Json(lista, JsonRequestBehavior.AllowGet);
        }



        public JsonResult ListarPeriodo()
        {


            var lista = db.Periodos.Where(parametro => parametro.BHABILITADO.Equals(1)).ToList()
                .Select(columnas => new
                {
                    columnas.IIDPERIODO,
                    columnas.NOMBRE,
                    FECHAINICIO = ((DateTime)columnas.FECHAINICIO).ToShortDateString(),
                    FECHAFIN = ((DateTime)columnas.FECHAFIN).ToShortDateString()
                });

            return Json(lista, JsonRequestBehavior.AllowGet);
        }


        public ActionResult TablaCurso()
        {

            return View();
        }

        public ActionResult TablaPeriodo()
        {

            return View();
        }

        public ActionResult TablaCursoEdicion()
        {

            return View();
        }
    }
}