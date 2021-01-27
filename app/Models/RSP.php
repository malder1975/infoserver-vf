<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RSP extends Model
{
    use HasFactory;

    public const UPDATED_AT = 'UPDATE';

    protected $table = 'RSP';
    protected $primaryKey = 'CODE';
    protected $fillable = [

    ];

    public $incrementing = false;
    public $timestamps = false;
}
