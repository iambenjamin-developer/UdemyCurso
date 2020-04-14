using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UdemyCurso.Models;

namespace UdemyCurso.Controllers
{
    public class DocenteController : Controller
    {
        BaseMatriculaLINQDataContext db = new BaseMatriculaLINQDataContext();



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
                             docente.DIRECCION,
                             docente.TELEFONOFIJO,
                             docente.TELEFONOCELULAR,
                             docente.EMAIL,
                             //docente.IIDSEXO,
                             FECHA_CONTRATO = ((DateTime)docente.FECHACONTRATO).ToShortDateString(),
                             // docente.IIDMODALIDADCONTRATO,
                             // docente.FOTO


                         }).ToList();



            return Json(lista, JsonRequestBehavior.AllowGet);

        }

        public JsonResult EditarDocente(int idDocente)
        {

            var lista = (from docente in db.Docentes
                         where docente.IIDDOCENTE.Equals(idDocente)
                         select new
                         {
                             docente.IIDDOCENTE,
                             docente.NOMBRE,
                             docente.APPATERNO,
                             docente.APMATERNO,
                             docente.DIRECCION,
                             docente.TELEFONOFIJO,
                             docente.TELEFONOCELULAR,
                             docente.EMAIL,
                             docente.IIDSEXO,
                             FECHA_CONTRATO = ((DateTime)docente.FECHACONTRATO).ToShortDateString(),
                             docente.IIDMODALIDADCONTRATO,
                             docente.FOTO

                         }).ToList();

            return Json(lista, JsonRequestBehavior.AllowGet);
        }


        public ActionResult TablaDocentes()
        {
            return View();
        }

        public JsonResult ListarModalidadContrato()
        {

            var lista = (db.ModalidadContratos.Where(paramentro => paramentro.BHABILITADO.Equals(1))
                .Select(columnas => new { ID = columnas.IIDMODALIDADCONTRATO, DESCRIPCION = columnas.NOMBRE })).ToList();



            return Json(lista, JsonRequestBehavior.AllowGet);

        }

        public JsonResult FiltrarDocentesPorModalidad(int idModalidad)
        {

            var lista = db.Docentes.Where(parametro => parametro.BHABILITADO.Equals(1)
            && parametro.IIDMODALIDADCONTRATO.Equals(idModalidad))
                .Select(columna => new
                {
                    columna.IIDDOCENTE,
                    columna.NOMBRE,
                    columna.APPATERNO,
                    columna.APMATERNO,
                    columna.EMAIL
                }).ToList();


            return Json(lista, JsonRequestBehavior.AllowGet);

        }


        public int GuardarDatos(Docente objDocente)
        {
            int nroRegistros = 0;


            try
            {

            }
            catch (Exception ex)
            {

                throw;
            }



            return nroRegistros;
        }

        public int GuardarSexo(Sexo objSexo)
        {
            int nroRegistros = 0;


            try
            {

            }
            catch (Exception ex)
            {

                throw;
            }



            return nroRegistros;
        }



        // GET: Docente
        public ActionResult Index()
        {
            return View();
        }






    }
}