using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using UdemyCurso.Models;

namespace UdemyCurso.Controllers
{
    public class TestController : Controller
    {


        BaseMatriculaLINQDataContext db = new BaseMatriculaLINQDataContext();
        // GET: Test
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult LayoutViejo()
        {
            return View();
        }


        public ActionResult Jquery()
        {
            return View();
        }

        public ActionResult Tabla()
        {
            return View();
        }


        public ActionResult ComboBox()
        {
            return View();
        }



        public ActionResult ComboBoxJS()
        {
            return View();
        }


        public JsonResult LlenarComboPersonas()
        {
            List<Persona> listaPersona = new List<Persona>()
            {
            new Persona { IdPersona =1, Nombre="Benjamin"},
            new Persona { IdPersona =2, Nombre="Miriam"},
            new Persona { IdPersona =3, Nombre="Rodolfo"},
            new Persona { IdPersona =15,Nombre="Carlos"},
            new Persona { IdPersona =47, Nombre="Gabriela"}
            };


            return Json(listaPersona, JsonRequestBehavior.AllowGet);
        }



        public ActionResult TablaJS()
        {
            return View();
        }



        public JsonResult ListarPersonas()
        {
            List<Persona> listaPersona = new List<Persona>()
            {
            new Persona { IdPersona =1, Apellido="Correa",Nombre="Benjamin"},
            new Persona { IdPersona =2, Apellido="Perez",Nombre="Miriam"},
            new Persona { IdPersona =3, Apellido="Gugger",Nombre="Rodolfo"},
            new Persona { IdPersona =15, Apellido="Herrera",Nombre="Carlos"},
            new Persona { IdPersona =47, Apellido="Rodriguez",Nombre="Gabriela"}
            };


            return Json(listaPersona, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ListarDocentes()
        {

            var lista = (from docente in db.Docentes
                         where docente.BHABILITADO.Equals(1)
                         select new
                         {
                             docente.IIDDOCENTE,
                             docente.NOMBRE,
                             docente.APPATERNO,
                             docente.APMATERNO,
                             docente.EMAIL

                         }).ToList();


            return Json(lista, JsonRequestBehavior.AllowGet);

        }



        public ActionResult Iconos()
        {
            return View();
        }


    }
}