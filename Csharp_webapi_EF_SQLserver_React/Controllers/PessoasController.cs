using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Data;
using Models;

namespace Csharp_webapi_EF_SQLserver_React.Controllers
{
    [Route("api/[controller]")]
    // [Route("[controller]")]
    [ApiController] // PARA RODAR COM JSON NO POSTMAN
    public class PessoasController : ControllerBase
    {
        private readonly DataContext _context;

        public PessoasController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pessoa>>> GetPessoas()
        {
            return await _context.Pessoa.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Pessoa>> GetPessoa(int id)
        {
            var pessoa = await _context.Pessoa.FindAsync(id);

            if (pessoa == null)
            {
                return NotFound();
            }

            return pessoa;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPessoa(int id, [FromForm] Pessoa pessoa)
        {
            if(ModelState.IsValid)
            {                
                if (PessoaExists(pessoa.Id))
                {
                    try
                    {
                        _context.Entry(pessoa).State = EntityState.Modified;
                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        throw;
                    }
                    // return NoContent(); 204 Ok funcionou mas sem retorno
                    return Ok(pessoa);
                }
                else
                {
                    return NotFound();
                }
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<ActionResult<Pessoa>> PostPessoa([FromForm] Pessoa pessoa)
        {
            if(ModelState.IsValid)
            {
                try
                {
                    _context.Pessoa.Add(pessoa);
                    await _context.SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
                // return CreatedAtAction("GetPessoa", new { id = pessoa.Id }, pessoa); // 201 ação criada
                // return CreatedAtAction("CreatedPessoa", pessoa.Id, pessoa); // 201 ação criada
                return CreatedAtAction("CreatedPessoa", pessoa); // 201 ação criada
            }
            else
            {
                return BadRequest();
            }
            // return CreatedAtAction("GetPessoa", new { id = pessoa.Id }, pessoa); // 201 ação criada
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Pessoa>> DeletePessoa(int id)
        {
            var pessoa = await _context.Pessoa.FindAsync(id);
            if (pessoa == null)
            {
                return NotFound();
            }
            else
            {
                try
                {
                    _context.Pessoa.Remove(pessoa);
                    await _context.SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    
                    throw ex;
                }
            }
            return NoContent();
        }

        private bool PessoaExists(int id)
        {
            return _context.Pessoa.Any(e => e.Id == id);
        }
    }
}
