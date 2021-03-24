using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    [Table("Pessoa")]
    public class Pessoa
    {
        [Column("Id")]
        public int Id { get; set; }

        [Column("Nome")]
        public string Nome { get; set; }
    }
}