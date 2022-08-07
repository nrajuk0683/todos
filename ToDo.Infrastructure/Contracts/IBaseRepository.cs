using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace ToDo.Infrastructure.Contracts
{
    public interface IBaseRepository<TEntity> where TEntity : class
    {
        IQueryable<TEntity> GetAll();
        Task AddRangeAsync(IEnumerable<TEntity> entities);

        IQueryable<TEntity> GetByQuery(Expression<Func<TEntity, bool>> expression);
        Task AddAsync(TEntity entity);
        void Update(TEntity entity);

        void Delete(TEntity entity);


        void RemoveRange(IEnumerable<TEntity> entities);
        void UpdateRange(IEnumerable<TEntity> entities);

        Task<IEnumerable<TEntity>> GetAllAsync();

        Task<TEntity> GetByIdAsync(int id);

        Task<IEnumerable<TEntity>> GetByQueryMultipleAsync(Expression<Func<TEntity, bool>> query);

        Task<TEntity> GetByQueryAsync(Expression<Func<TEntity, bool>> expression);


        IQueryable<TEntity> GetQueryable();

        Task<bool> AnyAsync(Expression<Func<TEntity, bool>> expression);

        Task DeleteAsync(int id);
    }
}
