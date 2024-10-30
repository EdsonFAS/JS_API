using MySql.Data.MySqlClient;
using ApiTarefasNet80.Database;

namespace ApiTarefasNet80.Models
{
    public class TarefaDAO
    {
        private static ConnectionMysql _conn;

        public TarefaDAO()
        {
            _conn = new ConnectionMysql();
        }

        public int Insert(Tarefa item)
        {
            try
            {
                var query = _conn.Query();
                query.CommandText = "INSERT INTO tarefas (descricao_tarefa, data_tarefa) VALUES (@descricao, @data)";

                query.Parameters.AddWithValue("@descricao", item.Descricao);
                query.Parameters.AddWithValue("@data", item.Data.ToString("yyyy-MM-dd HH:mm:ss")); //"10/11/1990" -> "1990-11-10"


                var result = query.ExecuteNonQuery();

                if (result == 0)
                {
                    throw new Exception("O registro não foi inserido. Verifique e tente novamente");
                }

                return (int)query.LastInsertedId;
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                _conn.Close();
            }
        }

        public List<Tarefa> List()
        {
            try
            {
                List<Tarefa> list = new List<Tarefa>();
                // List<Tarefa> list = [];

                var query = _conn.Query();
                query.CommandText = "SELECT * FROM tarefas";

                MySqlDataReader reader = query.ExecuteReader();

                while (reader.Read())
                {
                    list.Add(new Tarefa()
                    {
                        Id = reader.GetInt32("id_tarefa"),
                        Descricao = reader.GetString("descricao_tarefa"),
                        Data = reader.GetDateTime("data_tarefa"),
                        Feito = reader.GetBoolean("feito_tarefa")
                    });
                }

                return list;
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                _conn.Close();
            }
        }

        public Tarefa? GetById(int id)
        {
            try
            {
                Tarefa _tarefa = new Tarefa();
                // Tarefa _tarefa = new();

                var query = _conn.Query();
                query.CommandText = "SELECT * FROM tarefas WHERE id_tarefa = @_id";

                query.Parameters.AddWithValue("@_id", id);

                MySqlDataReader reader = query.ExecuteReader();

                while (reader.Read())
                {
                    _tarefa.Id = reader.GetInt32("id_tarefa");
                    _tarefa.Descricao = reader.GetString("descricao_tarefa");
                    _tarefa.Data = reader.GetDateTime("data_tarefa");
                    _tarefa.Feito = reader.GetBoolean("feito_tarefa");
                }

                return _tarefa;
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                _conn.Close();
            }
        }

        public void Update(Tarefa item)
        {
            try
            {
                var query = _conn.Query();
                query.CommandText = "UPDATE tarefas SET descricao_tarefa = @_descricao, feito_tarefa = @_feito WHERE id_tarefa = @_id";

                query.Parameters.AddWithValue("@_descricao", item.Descricao);
                query.Parameters.AddWithValue("@_feito", item.Feito);
                query.Parameters.AddWithValue("@_id", item.Id);

                var result = query.ExecuteNonQuery();

                if (result == 0)
                {
                    throw new Exception("O registro não foi atualizado. Verifique e tente novamente");
                }
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                _conn.Close();
            }
        }

        public void Delete(int id)
        {
            try
            {
                var query = _conn.Query();
                query.CommandText = "DELETE FROM tarefas WHERE id_tarefa = @_id";

                query.Parameters.AddWithValue("@_id", id);

                var result = query.ExecuteNonQuery();

                if (result == 0)
                {
                    throw new Exception("O registro não foi excluído. Verifique e tente novamente");
                }
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                _conn.Close();
            }
        }

    }
}
