<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vsl extends Model
{
    use HasFactory;

    public const UPDATED_AT = 'UPDATED';

    protected $table = 'VSL';
    protected $primaryKey = 'CODE';
    protected $fillable = [

    ];

    public $incrementing = false;
    public $timestamps = false;
}
