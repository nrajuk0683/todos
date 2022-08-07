using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using ToDo.Infrastructure;
using ToDo.Infrastructure.Contracts;

namespace ToDo.Infrastructure.Repositories
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {
        protected readonly DbSet<TEntity> _dbSet;
        protected readonly ToDoDbContext _dbContext;

        public BaseRepository(
            ToDoDbContext writeContext
            )
        {
            _dbSet = writeContext.Set<TEntity>();
            _dbContext = writeContext;
        }
        public virtual async Task AddAsync(TEntity entity)
        {
            await _dbSet.AddAsync(entity);
            await _dbContext.SaveChangesAsync();
        }

        public async Task AddRangeAsync(IEnumerable<TEntity> entities)
        {
            foreach (var entity in entities)
            {
                await AddAsync(entity);
            }
        }

        public async Task<bool> AnyAsync(Expression<Func<TEntity, bool>> expression)
        {
            return await _dbSet.AnyAsync(expression);
        }

        public virtual void Delete(TEntity entity)
        {
            _dbSet.Remove(entity);
            _dbContext.SaveChanges();
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await GetByIdAsync(id);
            Delete(entity);
        }

        public IQueryable<TEntity> GetAll()
        {
            return GetQueryable();
        }

        public async Task<IEnumerable<TEntity>> GetAllAsync()
        {
            return await GetAll().ToListAsync();
        }

        public virtual async Task<TEntity> GetByIdAsync(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public IQueryable<TEntity> GetByQuery(Expression<Func<TEntity, bool>> expression)
        {
            return GetAll().Where(expression);
        }

        public async Task<TEntity> GetByQueryAsync(Expression<Func<TEntity, bool>> expression)
        {
            return await GetByQuery(expression).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<TEntity>> GetByQueryMultipleAsync(Expression<Func<TEntity, bool>> query)
        {
            return await GetByQuery(query).ToListAsync();
        }

        public virtual IQueryable<TEntity> GetQueryable()
        {
            return _dbSet;
        }

        public void RemoveRange(IEnumerable<TEntity> entities)
        {
            foreach (var entity in entities)
            {
                Delete(entity);
            }
        }

        public virtual void Update(TEntity entity)
        {
            _dbSet.Update(entity);
            _dbContext.SaveChanges();
        }

        public void UpdateRange(IEnumerable<TEntity> entities)
        {
            foreach (var entity in entities)
            {
                Update(entity);
            }
        }
    }
}
