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

        public JsonResult ListarCursos()
        {


            var lista = db.Cursos.Where(parametro => parametro.BHABILITADO.Equals(1)).ToList()
                .Select(columnas => new { columnas.IIDCURSO, columnas.NOMBRE, columnas.DESCRIPCION });

            return Json(lista, JsonRequestBehavior.AllowGet);
        }


        public ActionResult TablaCursos()
        {
            return View();
        }



        public JsonResult EditarCurso(int idCurso)
        {

            var lista = (from curso in db.Cursos
                         where curso.IIDCURSO.Equals(idCurso)
                         select new
                         {
                             curso.IIDCURSO,
                             curso.NOMBRE,
                             curso.DESCRIPCION,
                             //   curso.BHABILITADO


                         }).ToList();

            return Json(lista, JsonRequestBehavior.AllowGet);
        }

        public int GuardarDatos(Models.Curso objCurso)
        {
            Models.BaseMatriculaLINQDataContext baseMatricula = new Models.BaseMatriculaLINQDataContext();

            int nroRegistrosAfectados = 0;


            try
            {
                //si el ID es cero agregar entidad
                if (objCurso.IIDCURSO == 0)
                {

                    baseMatricula.Cursos.InsertOnSubmit(objCurso);
                    baseMatricula.SubmitChanges();

                    nroRegistrosAfectados = 1;


                }//si el ID es distinto de cero editar entidad
                else {

                    nroRegistrosAfectados = 0;
                }
            }
            catch (Exception ex)
            {

                throw;
            }



            return nroRegistrosAfectados;
        }



        // GET: Curso
        public ActionResult Index()
        {
            return View();
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