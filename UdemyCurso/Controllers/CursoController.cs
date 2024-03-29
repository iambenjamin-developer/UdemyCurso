﻿using System;
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
            //  Models.BaseMatriculaLINQDataContext baseMatricula = new Models.BaseMatriculaLINQDataContext();

            int nroRegistrosAfectados = 0;


            try
            {
                //si el ID es cero agregar entidad
                if (objCurso.IIDCURSO == 0)
                {

                    db.Cursos.InsertOnSubmit(objCurso);
                    db.SubmitChanges();

                    nroRegistrosAfectados = 1;


                }//si el ID es distinto de cero editar entidad
                else
                {

                    Models.Curso updateCurso = db.Cursos.Where(parametro => parametro.IIDCURSO.Equals(objCurso.IIDCURSO)).First();

                    updateCurso.NOMBRE = objCurso.NOMBRE;
                    updateCurso.DESCRIPCION = objCurso.DESCRIPCION;
                    updateCurso.BHABILITADO = objCurso.BHABILITADO;

                    db.SubmitChanges();
                    nroRegistrosAfectados = 1;
                }
            }
            catch (Exception ex)
            {
                nroRegistrosAfectados = 0;
                throw;
            }



            return nroRegistrosAfectados;
        }


        public int Eliminar(Models.Curso objCurso)
        {

            int nroRegistrosAfectados = 0;

            try
            {

                Models.Curso updateCurso = db.Cursos.Where(parametro => parametro.IIDCURSO.Equals(objCurso.IIDCURSO)).First();

                updateCurso.BHABILITADO = 0;

                db.SubmitChanges();

                nroRegistrosAfectados = 1;
            }
            catch (Exception ex)
            {

                nroRegistrosAfectados = 0;
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